import React from "react";
import SideBar from "../blocks/SideBar";
import InfoCard from "./InfoCard";
import FilterCard from "./FilterCard";

export default ({
  handleSelect,
  manufacturers,
  manufacturers_list,
  vehicleTypes,
  vehicle_type
}) => {
  return (
    <SideBar>
      <InfoCard />
      <FilterCard
        vehicle_type={vehicle_type}
        vehicleTypes={vehicleTypes}
        handleSelect={handleSelect}
        manufacturers={manufacturers}
        manufacturers_list={manufacturers_list}
      />
    </SideBar>
  );
};
