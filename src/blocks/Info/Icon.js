import styled from "styled-components";

const Icon = styled.img.attrs(props =>
  ({
    margin: props.margin || "",
  })
)`
 margin: ${props => props.margin};
  width: 5rem;
  height: 50%;
  align-self: center;
`;

export default Icon;
