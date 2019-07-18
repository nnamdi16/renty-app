import styled from 'styled-components';
import AppSection from '../../elements/AppSection'

const Card = styled(AppSection).attrs(props =>({
  column: props.position,
  color: props.color || '#EEEFF0'
})) `
  width: 100%;
  height: 6rem;
  display:flex;
  justify-content:center;
  background-color:${props => props.color};
  align-content:center;
  grid-column: ${(position) => position.position};
  -webkit-box-shadow:0 0.5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1) inset;
     -moz-box-shadow:0 0.5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1) inset;
          box-shadow:0 0.5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.1) inset;

`

export default Card;
