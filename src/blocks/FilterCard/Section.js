import styled from "styled-components";

const Section = styled.div.attrs(props => ({
  row: props.row,
  padding: props.padding || "",
  align: props.align || "",
  background: props.background || "",
  color: props.color || ""
}))`
  grid-row: ${props => props.row};
  padding: ${props => props.padding};
  align-self: ${props => props.align};
  text-transform: uppercase;
  background-color: ${props => props.background};
  color: ${props => props.color};
  display: grid;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default Section;
