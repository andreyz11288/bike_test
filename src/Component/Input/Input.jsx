import React from 'react';

export default function Input({
  value,
  onChange,
  type,
  placeholder,
  minLength,
  disabled,
  required,
}) {
  return (
    <input
      value={value}
      onChange={e => onChange(e)}
      type={type}
      placeholder={placeholder}
      required={required && required}
      disabled={disabled && disabled}
      minLength={minLength && minLength}
    />
  );
}
