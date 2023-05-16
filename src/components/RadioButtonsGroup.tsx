import React, { FC } from "react";

interface RadioButtonsGroupProps {
  data: string[];
  onChange: (name: string, type: string) => () => void;
  inputName: string;
  activeButton?: string;
  title?: string;
}

const RadioButtonsGroup: FC<RadioButtonsGroupProps> = ({
  data,
  onChange,
  inputName,
  activeButton,
  title,
}) => (
  <div className="radio-buttons-wrapper">
    {title && <h2 className="radio-button-title">{title}</h2>}
    {data.map((name) => (
      <React.Fragment key={name}>
        <label className="radio-button">
          <span className="label">{name}</span>
          <input
            checked={name === activeButton}
            type="radio"
            name={inputName}
            onChange={onChange(name, inputName)}
          />
          <span className="radio"></span>
        </label>
      </React.Fragment>
    ))}
  </div>
);

export default RadioButtonsGroup;
