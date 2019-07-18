import React from "react";
import Category from "../blocks/Category";

export default () => {
  return (
      <Category>
        <Category.Item>
          <Category.Checkbox type="checkbox" />
          <Category.Text>Ford</Category.Text>
          <Category.Count>1</Category.Count>
        </Category.Item>
        <Category.Item>
          <Category.Checkbox type="checkbox" />
          <Category.Text>Reno</Category.Text>
          <Category.Count>1</Category.Count>
        </Category.Item>
        <Category.Item>
        <Category.Checkbox type="checkbox" />
          <Category.Text>Toyota</Category.Text>
          <Category.Count>1</Category.Count>
        </Category.Item>
        <Category.Item >
        <Category.Checkbox type="checkbox" />
          <Category.Text>Chevrolet</Category.Text>
          <Category.Count>1</Category.Count>
        </Category.Item>
        <Category.Item > 
        <Category.Checkbox type="checkbox" />
          <Category.Text>BMW</Category.Text>
          <Category.Count>1</Category.Count>
        </Category.Item>
      </Category>
  );
};
