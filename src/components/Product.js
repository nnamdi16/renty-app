import React from "react";
import PropTypes from "prop-types";
import Card from "../blocks/Card";
import CardItem from "../blocks/CardItem";
import Summary from "./Summary";
import Search from "../blocks/Search";

const App = ({ display }) => {
  return (
    <Card.Body width="50rem" height="55rem">
      {display.map(car => {
        return (
          <CardItem key={car.model}>
            <CardItem.Details width="100%" align="center">
              <CardItem.Images
                src={car.imageUrl}
                alt={`${car.model} ${car.make}`}
              />
            </CardItem.Details>
            <CardItem.Details width="100%" column="2/3">
              <CardItem.Summary>
                <CardItem.List>
                  {car.make} {car.model} | {car.category}
                </CardItem.List>
                <CardItem.List>
                  <Summary vehicles={car.car_details} />
                </CardItem.List>
              </CardItem.Summary>
            </CardItem.Details>
            <CardItem.Details width="100%" column="3/4" color="#F2F3F4">
              <CardItem.Summary>
                <CardItem.List>{car.price}</CardItem.List>
                <CardItem.List>Unlimited Free Miles Included</CardItem.List>
                <CardItem.List>
                  <Search.Button color="#3C90EC" width="8rem" height="2.5rem">
                    SELECT
                  </Search.Button>
                </CardItem.List>
              </CardItem.Summary>
            </CardItem.Details>
          </CardItem>
        );
      })}
    </Card.Body>
  );
};
App.propTypes = {
  display: PropTypes.array.isRequired
};
App.defaultProps = {
  display: []
};
export default App;
