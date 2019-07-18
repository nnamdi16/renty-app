import styled from "styled-components";
import Page from "./Page";

const Pagination = styled.div`
  grid-row: 7/8;
  display: flex;
  grid-column: 2/3;
  position: relative;
  left: 25rem;
  bottom: 1rem;

  .active {
    background-color: #0099ff;
    color: white;
    border: 1px solid #0099ff;
  }

`;

Pagination.Page = Page;
export default Pagination;
