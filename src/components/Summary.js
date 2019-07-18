import React from "react";
import CardItem from "../blocks/CardItem";

const App = ({ vehicles }) => {
  return (
    <div>
      {vehicles.map((vehicle, key) => {
        return <CardItem.List key={key}>{vehicle}</CardItem.List>;
      })}
    </div>
  );
};

export default App;
