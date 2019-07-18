import React from "react";
import Category from "../blocks/Category";

export default () => {
  return (
      <Category>
        <Category.Item>
          <Category.Checkbox type="checkbox" />
          <Category.Text>Economy</Category.Text>
          <Category.Count>1</Category.Count>
        </Category.Item>
        <Category.Item>
          <Category.Checkbox type="checkbox" />
          <Category.Text>Compact</Category.Text>
          <Category.Count>1</Category.Count>
        </Category.Item>
        <Category.Item>
        <Category.Checkbox type="checkbox" />
          <Category.Text>Intermediate</Category.Text>
          <Category.Count>1</Category.Count>
        </Category.Item>
        <Category.Item >
        <Category.Checkbox type="checkbox" />
          <Category.Text>Sport</Category.Text>
          <Category.Count>1</Category.Count>
        </Category.Item>
      </Category>
  );
};
