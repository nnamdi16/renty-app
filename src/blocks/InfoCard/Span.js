import styled from "styled-components";

const Span = styled.span.attrs(props => ({
  weight: props.weight || "bolder"
}))`
  font-weight: ${props => props.weight};
`;

export default Span;
