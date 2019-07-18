import React from "react";
import SideBar from "../blocks/SideBar";
import InfoCard from "./InfoCard";
import FilterCard from "./FilterCard";

export default () => {
  return (
    <SideBar>
      <InfoCard />
      <FilterCard />
    </SideBar>
  );
};
