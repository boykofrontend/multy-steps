import React, { FC } from "react";

import RadioTag from "../RadioTag";
import { mockData } from "@/src/utils/constants";

interface TagsProps {
  onChange: (name: string, type: string) => () => void;
}

const Tags: FC<TagsProps> = ({ onChange }) => (
  <div className="tags-component">
    <h3 className="tags-component-title">
      Project Category <br /> (It cannot be changed after creation)
    </h3>
    {mockData.TAGS.map((tag) => (
      <RadioTag key={tag} name={tag} onChange={onChange} />
    ))}
  </div>
);

export default Tags;
