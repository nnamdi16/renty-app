import React from 'react';
import Logo from './Logo';
import Header from '../blocks/Header';
import Menu from './Menu';
import Status from './Status';


export default () => {
  return ( <div>
    <Header>
      <Logo />
      <Menu/>
      <Status/>
    </Header>
  </div>
  )
}