import styled from "styled-components";
import { device } from "../../constants";

const SideBar = styled.div`
  grid-column: 1/2;
  display: grid;
  grid-template-rows: 13rem 1rem 23rem;
  font-size: 90%;

  @media ${device.laptop} {
    width: 50%;
  }
`;

export default SideBar;
