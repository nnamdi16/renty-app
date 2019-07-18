import styled from "styled-components";


const Text = styled.span.attrs(props => ({
  margin: props.margin || ""
}))`
  align-self: center;
  margin: ${props => props.margin};

`;

export default Text;
