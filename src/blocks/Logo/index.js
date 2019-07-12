import styled from 'styled-components';
import Icon from "./Icon"
import Text from "./Text"


const Logo = styled.div `
  display:grid;
  grid-column:2/3;
  grid-template-columns: repeat(2, 1fr);

`
Logo.Icon=Icon
Logo.Text=Text


export default Logo;