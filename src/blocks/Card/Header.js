import styled from 'styled-components';

const Header = styled.div.attrs(props =>({
    height:props.height || "3rem",
    color:props.color || "#F8F9FA",
    width:props.width || "20rem",
})) `
  -webkit-box-shadow:0 0.5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1) inset;
     -moz-box-shadow:0 0.5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1) inset;
          box-shadow:0 0.5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1) inset;
-webkit-border-top-left-radius: 6px;
-webkit-border-top-right-radius: 6px;
-moz-border-radius-topleft: 6px;
-moz-border-radius-topright: 6px;
border-top-left-radius: 6px;
border-top-right-radius: 6px;
  background-color: ${props => props.color} ;
  width: ${props => props.width};
  height: ${props => props.height};
`

export default Header;