import styled from 'styled-components';
import MenuList from './Text';
import List from './List';

const Menu = styled.nav `
 grid-column: 3/4;
 display: flex;
`

Menu.Item = MenuList;
Menu.List = List;

export default Menu;