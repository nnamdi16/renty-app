import styled, {css} from 'styled-components';
import Button from '../../elements/Button';

const Buttons = styled(Button).attrs(props =>({
  width: props.width || '6rem',
  color: props.color || '#798088',
  fontColor: props.fontColor || '#F9FCFD'
})) `
  font-size:0.8rem;
  background: ${props => props.color};
  color: ${props => props.fontColor};
  height:2rem;
  border-radius: 3px;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  width: ${props => props.width};
  grid-row: 2/3;

  /* ${props => props.register && css `
    background-color:#798088;
    width: 5rem;
  `}
  ${props => props.signIn && css `
    background-color: #C6CACD;
    width: 5rem;
  `} */
`

export default Buttons;