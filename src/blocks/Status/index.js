import styled from 'styled-components';
import Buttons from './Buttons';
import DropDownButton from '../../elements/DropDown';

const Status = styled.div `
  grid-column: 4/5;
  display:grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr)
`


Status.Button = Buttons;
Status.DropDown = DropDownButton;

export default Status;