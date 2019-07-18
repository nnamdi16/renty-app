import React from "react";
import FilterCard from "../blocks/FilterCard";
import Card from "../blocks/Card";
import Category from "./Category";
import Type from "./Type";

export default () => {
  return (
    <FilterCard>
      <Card.Header width="20rem" height="4rem">
        Filter results
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
          <FilterCard.Section row="2/3" />
          <FilterCard.Section
            row="3/4"
            align="center"
            background="#EDEEEF"
            color="#7B8385"
          >
            <FilterCard.Text>Manufacturers</FilterCard.Text>
          </FilterCard.Section>
          <FilterCard.Section row="4/5">
            <Category />
          </FilterCard.Section>
          <FilterCard.Section
            row="5/6"
            align="center"
            background="#EDEEEF"
            color="#7B8385"
          >
            <FilterCard.Text>Number of Passengers</FilterCard.Text>
          </FilterCard.Section>
          <FilterCard.Section row="6/7" />
          <FilterCard.Section
            row="7/8"
            align="center"
            background="#EDEEEF"
            color="#7B8385"
          >
            <FilterCard.Text>Vehicle type</FilterCard.Text>
          </FilterCard.Section>
          <FilterCard.Section row="8/9">
            <Type />
          </FilterCard.Section>
        </FilterCard.Body>
      </Card.Body>
    </FilterCard>
  );
};
