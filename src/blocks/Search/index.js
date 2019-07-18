import styled from "styled-components";
import SearchInput from "./SearchInput";
import SearchInfo from "./SearchInfo";
import SearchButton from "./Button";
import SearchImage from "./Image";
import Text from "./Text";
import Checkbox from "./Checkbox";
import DatePicker from "./DatePicker";
import Container from "./Container";


const Search = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  width: 100%;
  background-color: #feffff;
  justify-self: center;
  height: 12rem;
  -webkit-box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.3),
    0 0 1px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.3),
    0 0 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1) inset;
  border-top: 5px solid #ec7c34;
  -webkit-border-bottom-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -moz-border-radius-bottomright: 6px;
  -moz-border-radius-bottomleft: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);


`;
Search.SearchInput = SearchInput;
Search.SearchInfo = SearchInfo;
Search.Button = SearchButton;
Search.Image = SearchImage;
Search.Text = Text;
Search.Checkbox = Checkbox;
Search.DatePicker = DatePicker;
Search.Container = Container;

export default Search;
