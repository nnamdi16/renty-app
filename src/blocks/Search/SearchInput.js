import styled from "styled-components";
import Input from "../../elements/Input";

const SearchInput = styled(Input).attrs(props => ({
  row: props.row || '',
  column: props.column || '',
  align: props.align || "center",
  margin: props.margin || ""
}))`
  grid-row: ${props => props.row};
  align-self: ${props => props.align};
  margin-left: ${props => props.margin};
  grid-column: ${props => props.column};
`;

export default SearchInput;
