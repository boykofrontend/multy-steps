import React, { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  isDisabled?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  name, onClick, isDisabled, className = '', type = 'button'
}) => (
  <button
    className={`custom-btn ${className}`}
    onClick={onClick}
    disabled={isDisabled}
    type={type}
  >
    {name}
  </button>
);

export default Button;