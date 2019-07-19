import React from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Display from "../blocks/Display";
import ResultCard from "./ResultCard";

const App = ({ vehicles, handleSelect, manufacturers, vehicle_type }) => {
  return (
    <Display>
      <SideBar
        vehicle_type={vehicle_type}
        handleSelect={handleSelect}
        manufacturers={manufacturers}
        vehicleTypes={vehicles.vehicleTypes}
        manufacturers_list={vehicles.manufacturers}
      />
      <ResultCard vehicles={vehicles.vehicles} />
    </Display>
  );
};

App.propTypes = {
  manufacturers: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired
};
App.defaultProps = {
  vehicles: [],
  manufacturers: [],
  vehicle_type: []
};
export default App;
