import React, { Component } from "react";
import { connect } from "react-redux";
import ResultCard from "../blocks/ResultCard";
import Card from "../blocks/Card";
import CardItem from "../blocks/CardItem";
import { carReport } from "../actions";
import Page from "./Page";
class App extends Component {
  state = {
    totalRecords: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: ""
  };
  componentDidMount() {
    this.props.carReport();
    this.setState({
      totalRecords: this.props.display.length
    });
  }

  showProducts = display => {
    display = this.props.display || [];
    console.log(display);
    let result = null;
    if (display.length > 0) {
      result = display.map(car => {
        return (
          <CardItem key={car.model}>
            <CardItem.Details width="100%">
              <CardItem.Images src={car.imageUrl} />
            </CardItem.Details>
            <CardItem.Details width="100%" column="2/3">
              {car.make} {car.model}
            </CardItem.Details>
            <CardItem.Details width="100%" column="3/4" color="#F2F3F4">
              {car.year}
            </CardItem.Details>
          </CardItem>
        );
      });
    }
    return result;
  };

  onChangePage = data => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex
    });
  };

  render() {
    let { display } = this.props;
    let {
      totalPages,
      currentPage,
      pageLimit,
      startIndex,
      endIndex
    } = this.state;
    let rowsPerPage = [];
    console.log(endIndex);

    rowsPerPage = display.slice(startIndex, endIndex + 1);
    console.log(display);
    return (
      <ResultCard>
        <div>
          <select
            value={pageLimit}
            onChange={e =>
              this.setState({
                pageLimit: parseInt(e.target.value)
              })
            }
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        
        <Card.Header width="50rem" height="3rem" />
        <Card.Body width="50rem" height="43rem">
          {this.showProducts(rowsPerPage)}
        </Card.Body>
        <p>{display.length} Cars | {currentPage}/{totalPages} </p>
        <Page totalRecords={display.length} pageLimit= {pageLimit|| 5} initialPage = {1} pageToShow = {5} onChangePage={this.onChangePage}></Page>
      </ResultCard>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.display);
  return {
    display: state.display.cars
  };
};

export default connect(
  mapStateToProps,
  { carReport }
)(App);
