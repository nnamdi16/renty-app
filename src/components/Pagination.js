import React from "react";
import Pagination from "../blocks/Pagination";
import { Link } from "react-router-dom";

const App = ({ handleClick }) => {
  console.log(handleClick);
  return (
    <Pagination className="pagination">
      <Link to="/?page=1">
        <Pagination.Page className="active">1</Pagination.Page>
      </Link>
      <Link to="/?page=2">
        <Pagination.Page>2</Pagination.Page>
      </Link>
      <Link to="/?page=3">
        <Pagination.Page>3</Pagination.Page>
      </Link>
      <Link to="/?page=4">
        <Pagination.Page>4</Pagination.Page>
      </Link>
      <Link to="/?page=5">
        <Pagination.Page>5</Pagination.Page>
      </Link>
    </Pagination>
  );
};

export default App;
