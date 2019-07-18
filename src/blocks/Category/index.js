import styled from "styled-components";
import Item from "./Item";
import Checkbox from "./Checkbox";
import Count from "./Count";
import Text from "./Text";

const Category = styled.div`
  margin-top: 5px;
`;

Category.Item = Item;
Category.Checkbox = Checkbox;
Category.Text = Text;
Category.Count = Count;

export default Category;
