import React from 'react';
import Body from '../blocks/Body';
import Search from './Search';
import Display from './Display';
import Pagination from './Pagination';

export default () => {
  return (
    <Body>
      <Search></Search>
      <Display></Display>
      <Pagination></Pagination>
    </Body>
  )
}
