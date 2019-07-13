import React from 'react';
import Search from '../blocks/Search';

export default () =>{
  return (
    <Search>
      <Search.SearchInput></Search.SearchInput>
      <Search.SearchInfo></Search.SearchInfo>
      <Search.Button>Update</Search.Button>
    </Search>
  )
}
