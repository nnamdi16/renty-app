import styled from "styled-components";

const Details = styled.div.attrs(props => ({
  width: props.width || "2rem",
  color: props.color || "#F8F9FA",
  column: props.column || "1/2",
  align: props.align || ""
}))`
  width: ${props => props.width};
  background-color: ${props => props.color};
  grid-column: ${props => props.column};
  align-self: ${props => props.align};
  text-transform: capitalize;
`;
export default Details;
