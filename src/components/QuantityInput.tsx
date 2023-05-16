import React, { FC, useState } from "react";

import Button from "./Button";

interface QuantityInputProps {
  onChange: (name: string, type: string) => void;
}

const QuantityInput: FC<QuantityInputProps> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState<number>(0);

  const handleDecrement = (): void => {
    setInputValue(inputValue - 1);
    onChange("quantityCount", `${inputValue - 1}`);
  };

  const handleIncrement = (): void => {
    setInputValue(inputValue + 1);
    onChange("quantityCount", `${inputValue + 1}`);
  };

  return (
    <div className="quantity-input-wrapper">
      <Button
        className="quantity-decrement"
        onClick={handleDecrement}
        isDisabled={inputValue === 0}
        name="-"
      />
      <input
        value={inputValue}
        className="quantity-input"
        min={0}
        name="quantityCount"
      />
      <Button
        className="quantity-increment"
        onClick={handleIncrement}
        name="+"
      />
    </div>
  );
};

export default QuantityInput;
