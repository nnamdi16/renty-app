import styled from 'styled-components';
import MenuList from './Text';
import List from './List';
import HeaderButton from './Button';

const Menu = styled.nav `
 grid-column: 3/4;
 display: flex;
`

Menu.Item = MenuList;
Menu.List = List;
Menu.Button = HeaderButton;

export default Menu;