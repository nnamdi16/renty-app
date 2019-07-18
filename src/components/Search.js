import React from "react";
import PropTypes from "prop-types";
import Search from "../blocks/Search";
// import Icon from "../img/magnifying-glass.svg";

const App = ({ handleChange, value }) => {
  return (
    <Search>
      <Search.SearchInput
        type="text"
        margin="2rem"
        width="40rem"
        name="search"
        value={value}
        className="searchInput"
        onChange={handleChange}
        placeholder="Search for a car"
      />
      <Search.SearchInfo>
        <Search.SearchInput
          type="text"
          width="10rem"
          name="location"
          color="#F8F9FA"
          // value={value}
          column="1/2"
          margin="2rem"
          className="searchInput"
          // onChange={handleChange}
          placeholder="Search for a car"
        />
        <Search.SearchInput
          type="date"
          width="10rem"
          name="pick-up-date"
          color="#F8F9FA"
          // value={value}
          column="2/3"
          margin="2rem"
          className="searchInput"
          // onChange={handleChange}
          placeholder="Search for a car"
        />
        <Search.SearchInput
          type="time"
          width="4rem"
          name="pick-up-time"
          color="#F8F9FA"
          // value={value}
          column="3/4"
          margin="2rem"
          className="searchInput"
          // onChange={handleChange}
          placeholder="Search for a car"
        />
        <Search.SearchInput
          type="date"
          width="10rem"
          name="drop-off-date"
          color="#F8F9FA"
          // value={value}
          column="4/5"
          margin="2rem"
          className="searchInput"
          // onChange={handleChange}
          placeholder="Search for a car"
        />
        <Search.SearchInput
          type="time"
          width="4rem"
          name="drop-off-time"
          color="#F8F9FA"
          // value={value}
          column="5/6"
          margin="2rem"
          className="searchInput"
          // onChange={handleChange}
          placeholder="Search for a car"
        />
        <Search.SearchInput
          type="text"
          width="10rem"
          name="carType"
          color="#F8F9FA"
          // value={value}
          column="6/7"
          margin="2rem"
          className="searchInput"
          // onChange={handleChange}
          placeholder="Search for a car"
        />
        <Search.Button width="6rem" height="2rem" color="#EF7D34">
          Update
        </Search.Button>
      </Search.SearchInfo>
      <Search.Checkbox
        type="checkbox"
        id="subscribeNews"
        name="subscribe"
        value="newsletter"
      />
      <Search.Text>Return at different location</Search.Text>
    </Search>
  );
};

App.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
App.defaultProps = {
  value: ""
};

export default App;
