import styled, {css} from 'styled-components';
import Button from '../../elements/Button';

const Buttons = styled(Button) `
  font-size:0.8rem;
  background: ${props => props.register ?'#798088':'#C6CACD'};
  color: #F9FCFD;
  height:2rem;
  border-radius: 3px;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  width: ${props => props.register?'5rem':'4rem'};
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