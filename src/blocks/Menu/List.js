import styled from 'styled-components';
import {device} from '../../constants'
const List = styled.ul `
  width:100%;
  list-style-type: none;
  display: flex;
  flex-direction:row;
  justify-content:space-evenly;
  place-self:center;
  padding:0;
  margin: 0;

  @media ${device.laptop} {
    line-height: 3rem;
  }
`

export default List;