import React from 'react';
import Pagination from '../blocks/Pagination';


export default ()  => {
  return (
    <Pagination className='pagination'>
      <Pagination.Page className='active'>1</Pagination.Page>
      <Pagination.Page>2</Pagination.Page>
      <Pagination.Page>3</Pagination.Page>
      <Pagination.Page>4</Pagination.Page>
      <Pagination.Page>5</Pagination.Page>
    </Pagination>
  )
}
