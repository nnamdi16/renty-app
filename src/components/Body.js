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
import PropTypes from "prop-types";

class App extends Component {
  state = {
    totalRecords: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: "",
    waitTime: 500,
    search: "",
    manufacturers: [],
    vehicle_type: [],
    page: 1
  };

  componentDidMount() {
    this.getSearchParams();
    this.handleGetVehicles();
    this.setState({
      totalRecords: this.props.display.length
    });
  }

  handleSelect = ({ target: { name, value } }) => {
    if (this.state[name].indexOf(value) > -1) {
      const index = [...this.state[name]].indexOf(value);
      const newList = [...this.state[name]];
      newList.splice(index, 1);
      this.setState({ [name]: newList }, () => {
        debounce(query => {
          this.pushToLocation();
        }, 0)();
      });
    } else {
      const newList = [...this.state[name], value];
      this.setState({ [name]: newList }, () => {
        debounce(query => {
          this.pushToLocation();
        }, 0)();
      });
    }
  };

  getSearchParams = () => {
    const params = new window.URLSearchParams(this.props.location.search);
    const page = params.get("page");
    const search = params.get("search");
    const manufacturers = params.getAll("manufacturers");
    this.setState({ search, manufacturers, page });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      { [name]: value },
      () => name === "search" && this.debouncedSearch()
    );
  };

  handleClick = page => {
    this.setState({ page }, () => {
      debounce(query => {
        this.pushToLocation();
      }, 0)();
    });
  };

  debouncedSearch = debounce(query => {
    this.pushToLocation();
  }, this.state.waitTime);

  pushToLocation = () => {
    const { search, manufacturers, vehicle_type, page } = this.state;
    const query = getQueryString({ page, search, manufacturers, vehicle_type });
    const url = `${this.props.match.url}${query && `?${query}`}`;
    this.props.history.push(url);
  };

  handleGetVehicles = () => {
    const params = new window.URLSearchParams(this.props.location.search);
    const search = params.get("search");
    const page = params.get("page");
    const manufacturers = params.getAll("manufacturers");
    const vehicle_type = params.getAll("vehicle_type");
    const query = getQueryString({ page, search, manufacturers, vehicle_type });
    this.props.onGetVehicles(query);
  };

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.location.search, this.props.location.search)) {
      this.handleGetVehicles();
    }
  }

  render() {
    const { search, manufacturers, vehicle_type } = this.state;
    console.log(this.state);
    return (
      <Body>
        <Search handleChange={this.handleChange} value={search} />
        <Display
          vehicle_type={vehicle_type}
          manufacturers={manufacturers}
          vehicles={this.props.display}
          handleSelect={this.handleSelect}
          handleChange={this.handleChange}
        />
        <Pagination handleClick={this.handleClick} />
      </Body>
    );
  }
}

const mapStateToProps = state => {
  return {
    display: state.display.cars,
    searchedCars: state.display.searchedCars
  };
};

export default connect(
  mapStateToProps,
  { onGetVehicles }
)(withRouter(App));

App.propTypes = {
  manufacturers: PropTypes.array.isRequired,
  vehicle_type: PropTypes.array.isRequired
};

App.defaultProps = {
  manufacturers: [],
  vehicle_type: []
};
