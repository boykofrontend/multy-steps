import React from 'react';

import { RegExps } from '../utils/constants';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  defaultValue?: string;
  name: string;
  value: string | undefined;
  className?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({
  onChange, label, className = '', defaultValue,
  name, value = '', type = 'text', required = false
}: InputProps) => {
  
  if (!label) {
    return (
      <input
        className={`custom-input ${className}`}
        name={name}
        type={name}
        onChange={onChange}
        value={value}
        required={required}
        pattern={RegExps.email}
      />
    )
  }

  return (
    <label className={`custom-input-wrapper ${className}`}>
      <div className='custom-input-label'>
        {label}
      </div>
      {defaultValue && (
        <span className='custom-input-placeholder'>{defaultValue}</span>
      )}
      <input
        type={type}
        value={value}
        className={`custom-input ${defaultValue ? 'default-value' : ''}`}
        name={name}
        required={required}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;