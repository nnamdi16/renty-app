import styled from 'styled-components';


const AppSection = styled.div `
position:relative;
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
     -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
          box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  &:before,after{
        content: "";
        position: absolute;
        z-index: -1;
         -webkit-box-shadow: 0 0 20 px rgba(0, 0, 0, 0.8);
        -moz-box-shadow: 0 0 20 px rgba(0, 0, 0, 0.8);
        box-shadow: 0 0 20 px rgba(0, 0, 0, 0.8);
        top: 50 % ;
        bottom: 0;
        left: 10 px;
        right: 10 px; 
        -moz-border-radius: 100 px / 10 px;
        border-radius: 100 px / 10 px;
  }
  &:after {
        right: 10 px;
        left: auto; 
        -webkit-transform: skew(8 deg) rotate(3 deg); 
        -moz-transform: skew(8 deg) rotate(3 deg); 
        -ms-transform: skew(8 deg) rotate(3 deg); 
        -o-transform: skew(8 deg) rotate(3 deg);
        transform: skew(8 deg) rotate(3 deg);
  }
`
export default AppSection;