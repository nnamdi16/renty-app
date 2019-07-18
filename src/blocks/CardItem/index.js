import styled from "styled-components";
import Details from "./Details";
import Images from "./Images";
import Summary from './Summary';
import List from './List';

const CardItem = styled.section`
  width: 100%;
  height: 10rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  border-bottom-style: dotted;
  border: 0 0 thin 0;
  border-color: #d7dadc;
  font-size: 1rem;
  text-transform:capitalize;
`;

CardItem.Details = Details;
CardItem.Images = Images;
CardItem.Summary = Summary;
CardItem.List = List;

export default CardItem;
