import styled from 'styled-components';
// import { FaCaretDown } from 'react-icons/fa';

const DropDownButton = styled.div `

 ul li {
   display:none;
 }

 ul li:hover {
  cursor: pointer;
  background-color: #f2f2f2;
 }

 ul li:hover ul {
  display: block;
  margin-top: 1rem;
  width: 12.5rem;
  left: 0;
  position: absolute;
 }
 ul li:hover ul li {
  display: block;
  background-color: #e7e7e7;
}


`

export default DropDownButton;