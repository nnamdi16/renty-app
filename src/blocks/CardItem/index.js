import styled from 'styled-components';
import Details from './Details';
import Images from './Images';

const CardItem = styled.section `
  width :100%;
  height: 10rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  border-bottom-style:dotted;
  border: 0 0 thin 0;
  border-color:#D7DADC;
`

CardItem.Details = Details;
CardItem.Images = Images;

export default CardItem;
