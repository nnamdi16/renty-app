import styled from 'styled-components';
import Button from '../../elements/Button';

const Buttons = styled(Button).attrs(props =>({
  width: props.width || '4rem',
  color: props.color || '#798088',
  fontColor: props.fontColor || '#F9FCFD',
  row: props.row || '1/2',
  justify: props.justify || '',
  column: props.column || '1/2'
})) `
  font-size:0.8rem;
  background: ${props => props.color};
  color: ${props => props.fontColor};
  height:2rem;
  border-radius: 3px;
  transition: 0.5s all ease-out;
  width: ${props => props.width};
  grid-row: ${props => props.row};
  grid-column: ${props => props.column};
  justify-self: ${props => props.justify}

`

export default Buttons;