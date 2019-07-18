import styled from "styled-components";

const Text = styled.span.attrs(props => ({
  position: props.position || "",
  left: props.left || ""
}))`
  grid-row: 3/4;
  position: ${props => props.position};
  left: ${props => props.left};
`;
export default Text;
