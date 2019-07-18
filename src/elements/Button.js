import styled from 'styled-components';

const Button = styled.button.attrs(props =>({
  border: props.border || 'none'
}) ) `
  font-size: 0.9rem;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: ${props => props.border }
`;
export default Button;