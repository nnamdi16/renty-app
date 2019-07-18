import React from "react";
import Pagination from "../blocks/Pagination";
const pages=[1,2,3,4,5,]
const App = ({ handleClick }) => {
  return (
    <Pagination className="pagination">
      {
        pages.map((page)=><button as="button" onClick={() => handleClick(page)}>
        <Pagination.Page className="active">{page}</Pagination.Page>
      </button>)
      }
      
    </Pagination>
  );
};

export default App;
