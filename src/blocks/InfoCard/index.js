import styled from "styled-components";
import Text from "../InfoCard/Text";
import Span from './Span';


const InfoCard = styled.div`
  grid-row: 1/2;
  color: #777c81;


`;
InfoCard.Text = Text;
InfoCard.Span = Span;
export default InfoCard;
