 import styled from 'styled-components';
 import Button from '../../elements/Button';

const Page = styled(Button)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  color: black;
  float:right;
  padding: 8px 16px;
  text-decoration:none;
  transition: background-color .3s;
  border: 3px solid #ddd;

`;

export default Page;