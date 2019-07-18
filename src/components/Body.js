import React, { Component } from "react";
import { connect } from "react-redux";
import debounce from "lodash.debounce";
import isEqual from "lodash.isequal";
import Body from "../blocks/Body";
import Search from "./Search";
import Display from "./Display";
import Pagination from "./Pagination";
import { onGetVehicles } from "../actions";
import { getQueryString } from "../util/helpers";
import { withRouter } from "react-router-dom";

class App extends Component {
  state = {
    totalRecords: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: "",
    waitTime: 500,
    search: ""
  };

  componentDidMount() {
    this.getSearchParams();
    this.handleGetVehicles();
    this.setState({
      totalRecords: this.props.display.length
    });
  }

  getSearchParams = () => {
    const params = new window.URLSearchParams(this.props.location.search);
    const search = params.get("search");
    this.setState({ search });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      { [name]: value },
      () => name === "search" && this.debouncedSearch()
    );
  };

  debouncedSearch = debounce(query => {
    this.pushToLocation();
  }, this.state.waitTime);

  pushToLocation = () => {
    const params = new window.URLSearchParams(this.props.location.search);
    const { search } = this.state;
    const page = params.get("page");
    const query = getQueryString({ page, search });
    const url = `${this.props.match.url}${query}`;
    this.props.history.push(url);
  };

  handleGetVehicles = () => {
    const params = new window.URLSearchParams(this.props.location.search);
    const search = params.get("search");
    const page = params.get("page");
    const query = getQueryString({ page, search });
    this.props.onGetVehicles(query);
  };

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.location.search, this.props.location.search)) {
      this.handleGetVehicles();
    }
  }

  render() {
    const { search } = this.state;
    console.log(this.props.display);
    console.log(this.props.location);
    console.log(this.props);
    return (
      <Body>
        <Search handleChange={this.handleChange} value={search} />
        <Display
          vehicles={this.props.display}
          handleChange={this.handleChange}
        />
        <Pagination handleClick={this.pushToLocation} />
      </Body>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.display);
  return {
    display: state.display.cars,
    searchedCars: state.display.searchedCars
  };
};

export default connect(
  mapStateToProps,
  { onGetVehicles }
)(withRouter(App));
