import React from "react";
import PropTypes from "prop-types";
import Category from "../blocks/Category";

const App = ({ manufacturers, handleSelect, manufacturers_list }) => {
  return (
    <Category>
      {manufacturers_list.map(
        ({ manufacturer, number }, key) =>
          number > 0 && (
            <Category.Item key={key}>
              <Category.Checkbox
                type="checkbox"
                value={manufacturer}
                checked={[...manufacturers].includes(manufacturer)}
                name="manufacturers"
                onChange={handleSelect}
              />
              <Category.Text>{manufacturer}</Category.Text>
              <Category.Count>{number}</Category.Count>
            </Category.Item>
          )
      )}
    </Category>
  );
};
App.propTypes = {
  manufacturers_list: PropTypes.array.isRequired
};
App.defaultProps = {
  manufacturers_list: []
};
export default App;
