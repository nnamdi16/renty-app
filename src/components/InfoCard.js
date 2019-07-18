import React from "react";
import Card from "../blocks/Card";
import InfoCard from "../blocks/InfoCard";

export default () => {
  return (
    <InfoCard>
      <Card>
        <Card.Header height="3rem">
          <InfoCard.Text>Info</InfoCard.Text>
        </Card.Header>
        <Card.Body height="10rem">
          <InfoCard.Text>
            <InfoCard.Span>Please Note: </InfoCard.Span>The vehicles shown are
            examples.Specify models within a car class may vary in avalability
            and features, such as passenge seating, luggage capacity and mileage
          </InfoCard.Text>
        </Card.Body>
      </Card>
    </InfoCard>
  );
};
