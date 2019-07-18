import styled from "styled-components";
import Text from "./Text";
import Section from "./Section";
import Body from "./Body";

const FilterCard = styled.div`
  grid-row: 3/4;
`;

FilterCard.Text = Text;
FilterCard.Section = Section;
FilterCard.Body = Body;
export default FilterCard;
