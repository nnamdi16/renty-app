import styled from "styled-components";

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  grid-row: 2/3;

  :hover {
    opacity: 1;
  }

  :: -webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #444e59;
    cursor: pointer;
  }

  :: -moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #444e59;
    cursor: pointer;
  }
`;

export default Slider;
