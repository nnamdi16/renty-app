import styled from 'styled-components';
import Card from './Card';
import Icon from './Icon';
import Text from './Text';


const Info = styled.div `
  width:100%;
  display:grid;
  grid-template-columns: 2fr repeat(2, 1fr) 2fr ;

`

Info.Card = Card;
Info.Icon = Icon;
Info.Text = Text;


export default Info;