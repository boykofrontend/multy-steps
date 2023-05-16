import React, { FC } from "react";

interface RadioTagProps {
  name: string;
  onChange: (inputName: string, type: string) => () => void;
}

const Tag: FC<RadioTagProps> = ({ name, onChange }) => (
  <div className="radio-tag-wrapper">
    <label>
      <input
        name="radioTag"
        type="radio"
        onChange={onChange(name, "radioTag")}
      />
      <span className="radio-tag">{name}</span>
    </label>
  </div>
);

export default Tag;
