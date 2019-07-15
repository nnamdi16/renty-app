import styled from 'styled-components';
import Page from './Page';

const Pagination = styled.div `
  grid-row: 6/7;
  display:flex;
  grid-column: 2/3;
 
  .active {
    background-color: #0099FF;
    color: white;
    border: 1px solid #0099FF;
  }

  /* .pagination span {
    cursor: pointer;
    color: black;
    float:left;
    padding: 8px 16px;
    text-decoration:none;
    transition: background-color .3s;
    border: 1px solid #ddd;
  } */

  /* .pagination span.active {
    background-color: #0099FF;
    color: white;
    border: 1px solid #0099FF;
  } */
`

Pagination.Page = Page;
export default Pagination;