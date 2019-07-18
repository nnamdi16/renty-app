import styled from "styled-components";
import Card from "./Card";
import Icon from "./Icon";
import Text from "./Text";


const Info = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 15rem);
  color: #777c81;

`;

Info.Card = Card;
Info.Icon = Icon;
Info.Text = Text;

export default Info;
