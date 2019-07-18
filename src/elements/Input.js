import styled from 'styled-components';

const Input = styled.input.attrs(props =>({
  boxShadow: props.boxShadow || '',
  height: props.height || '2rem',
  borderRadius: props.borderRadius || '',
  boxSizing: props.boxSizing || '', //box-sizing
  border: props.border || 'none',
  width: props.width || '4rem',
  color: props.color || '#FEFFFF',
  appearance: props.appearance || 'none',
  size: props.size || '1rem',


}))`
  /* ... */
  box-shadow:${props =>props.boxShadow};
  height: ${props => props.height};
  border-radius: ${props =>props.borderRadius};
  box-sizing: ${props =>props.boxSizing};
  width: ${props => props.width};
  background-color: ${props =>props.color};
  border: ${props => props.border};
  -webkit-appearance: ${props => props.appearance};
  -moz-appearance: ${props => props.appearance };
  appearance: ${props => props.appearance};
  font-size: ${props => props.size};

.searchInput::-webkit-input-placeholder { 
font-family: FontAwesome;
font-weight: normal;
overflow: visible;
vertical-align: top;
display: inline-block !important;
padding-left: 5px;
padding-top: 2px;
color: hsl(9, 40%, 60%);
}

.searchInput::-moz-placeholder  { 
font-family: FontAwesome;
font-weight: normal;
overflow: visible;
vertical-align: top;
display: inline-block !important;
padding-left: 5px;
padding-top: 2px;
color: hsl(9, 40%, 60%);
}

.searchInput:-ms-input-placeholder  { 
font-family: FontAwesome;
font-weight: normal;
overflow: visible;
vertical-align: top;
display: inline-block !important;
padding-left: 5px;
padding-top: 2px;
color: hsl(9, 40%, 60%);
}
  
  
`;
 export default Input;