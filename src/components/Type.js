import React from "react";
import Category from "../blocks/Category";

const App = ({ vehicle_type, handleSelect, vehicle_types_list }) => {
  return (
    <Category>
      {vehicle_types_list.map(({ category, number }, key) => (
        <Category.Item key={key}>
          <Category.Checkbox
            type="checkbox"
            value={category}
            name="vehicle_type"
            onChange={handleSelect}
            checked={vehicle_type.includes(category)}
          />
          <Category.Text>{category}</Category.Text>
          <Category.Count>{number}</Category.Count>
        </Category.Item>
      ))}
      {/* <Category.Item>
        <Category.Checkbox type="checkbox" />
        <Category.Text>Compact</Category.Text>
        <Category.Count>1</Category.Count>
      </Category.Item>
      <Category.Item>
        <Category.Checkbox type="checkbox" />
        <Category.Text>Intermediate</Category.Text>
        <Category.Count>1</Category.Count>
      </Category.Item>
      <Category.Item>
        <Category.Checkbox type="checkbox" />
        <Category.Text>Sport</Category.Text>
        <Category.Count>1</Category.Count>
      </Category.Item> */}
    </Category>
  );
};

App.defaultProps = {
  vehicle_types_list: [],
  vehicle_type: []
};
export default App;
