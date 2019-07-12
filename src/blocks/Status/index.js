import styled from 'styled-components';
import Buttons from './Buttons';
import DropDownButton from '../../elements/DropDown';

const Status = styled.div `
  grid-column: 4/5;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
`


Status.Button = Buttons;
Status.DropDown = DropDownButton;

export default Status;