import React, { Component } from "react";
import ResultCard from "../blocks/ResultCard";
import Card from "../blocks/Card";
import Product from "./Product";

class App extends Component {
  state = {
    totalRecords: "",
    totalPages: "",
    pageLimit: "",
    currentPage: "",
    startIndex: "",
    endIndex: ""
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
    let { vehicles } = this.props;

    return (
      <ResultCard>
        <Card.Header width="50rem" height="3rem" />
        <Product display={vehicles} />
      </ResultCard>
    );
  }
}
export default App;
