import styled from 'styled-components';
import Button from '../../elements/Button';


const SearchButton = styled(Button).attrs(props => ({
  width: props.width,
  height: props.height,
  color: props.color
}))`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.color};
  border: none;
  place-self:center;
  color: #F6EBE0;
  `;

export default SearchButton;