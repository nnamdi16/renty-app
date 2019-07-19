import React from "react";
import FilterCard from "../blocks/FilterCard";
import Card from "../blocks/Card";
import Category from "./Category";
import Type from "./Type";
import Slider from "../blocks/Slider";

export default ({
  manufacturers,
  handleSelect,
  manufacturers_list,
  vehicle_type,
  vehicleTypes
}) => {
  return (
    <FilterCard>
      <Card.Header width="20rem" height="4rem" align="center">
        <Card.Text>Filter results</Card.Text>
      </Card.Header>
      <Card.Body width="20rem" height="35rem">
        <FilterCard.Body>
          <FilterCard.Section
            row="1/2"
            align="center"
            background="#EDEEEF"
            color="#7B8385"
          >
            <FilterCard.Text>Price Range</FilterCard.Text>
          </FilterCard.Section>
          <FilterCard.Section row="2/3">
            <Slider type="range" min="1" max="100" value="50" />
          </FilterCard.Section>
          <FilterCard.Section
            row="3/4"
            align="center"
            background="#EDEEEF"
            color="#7B8385"
          >
            <FilterCard.Text>Manufacturers</FilterCard.Text>
          </FilterCard.Section>
          <FilterCard.Section row="4/5">
            <Category
              handleSelect={handleSelect}
              manufacturers={manufacturers}
              manufacturers_list={manufacturers_list}
            />
          </FilterCard.Section>
          <FilterCard.Section
            row="5/6"
            align="center"
            background="#EDEEEF"
            color="#7B8385"
          >
            <FilterCard.Text>Number of Passengers</FilterCard.Text>
          </FilterCard.Section>
          <FilterCard.Section row="6/7">
            <Slider type="range" min="1" max="100" value="50" />
          </FilterCard.Section>
          <FilterCard.Section
            row="7/8"
            align="center"
            background="#EDEEEF"
            color="#7B8385"
          >
            <FilterCard.Text>Vehicle type</FilterCard.Text>
          </FilterCard.Section>
          <FilterCard.Section row="8/9">
            <Type
              vehicle_type={vehicle_type}
              handleSelect={handleSelect}
              vehicle_types_list={vehicleTypes}
            />
          </FilterCard.Section>
        </FilterCard.Body>
      </Card.Body>
    </FilterCard>
  );
};
