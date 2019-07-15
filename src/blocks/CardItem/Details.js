import styled from 'styled-components';

const Details = styled.div.attrs(props => ({
  width: props.width || '2rem',
  color: props.color || '#F8F9FA',
  column: props.column || '1/2'
})) `
  width: ${props => props.width};
  background-color: ${props => props.color};
  grid-column: ${props => props.column};
`
export default Details;