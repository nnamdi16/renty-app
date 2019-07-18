import styled from "styled-components";

const Item = styled.div.attrs(props => ({}))`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  height: 2rem;
`;
export default Item;
