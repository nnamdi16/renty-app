import Menu from '../blocks/Menu';
import React from 'react';

export default () => {
  return (
    <Menu>
    <Menu.List>
      <Menu.Button width='4rem' height='1.5rem' color='#EF7D34' >Help</Menu.Button>
      <Menu.Item>Terms & Condition</Menu.Item>
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
    </Menu.List>
  </Menu>
  )
}
