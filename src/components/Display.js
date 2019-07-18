import React from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Display from "../blocks/Display";
import ResultCard from "./ResultCard";

const App = ({ vehicles }) => {
  return (
    <Display>
      <SideBar />
      <ResultCard vehicles={vehicles} />
    </Display>
  );
};

App.propTypes = {
  vehicles: PropTypes.array.isRequired
};
App.defaultProps = {
  vehicles: []
};
export default App;
