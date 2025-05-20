import React from 'react';
import '../styles/InputField.css';

export default function InputField({
  label, name, type = 'text', value, onChange
}) {
  return (
    <label className="input-field">
      <span className="label-text">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
