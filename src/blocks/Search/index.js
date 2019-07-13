import styled from 'styled-components';
import SearchInput from './SearchInput';
import SearchInfo from './SearchInfo';
import SearchButton from './Button';

const Search = styled.div `
  grid-row: 2/3;
  grid-column:2/3;
  width: 100%;
  background-color: #FEFFFF;
  justify-self:center;
  height:12rem;
  -webkit-box-shadow:0 0.5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1) inset;
     -moz-box-shadow:0 0.5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1) inset;
          box-shadow:0 0.5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1) inset;
  border-top:5px solid #EC7C34;
  -webkit-border-bottom-right-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -moz-border-radius-bottomright: 6px;
  -moz-border-radius-bottomleft: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  
`
Search.SearchInput = SearchInput;
Search.SearchInfo = SearchInfo;
Search.Button = SearchButton;

export default Search;