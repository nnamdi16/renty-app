import styled from "styled-components";
import { device } from "../../constants";

const Text = styled.span`
  width: 5rem;
  grid-column: 2/3;
  align-self: center;
  justify-self: start;
  font-size: 2rem;
  font-weight: bolder;
  color: #424c57;

  @media ${device.laptop} {
    font-size: 1rem;
  }
`;

export default Text;
