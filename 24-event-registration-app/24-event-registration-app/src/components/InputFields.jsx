import React from "react";
import '../styles/InputFields.css'

export default function InputFields ({
label, name, type = 'text', value, onChange, options
}){
  if (type === 'radio' && Array.isArray(options)) {
    return (
      <fieldset style={{ border: 'none', padding: 0 }}>
        {label && <legend>{label}</legend>}
        {options.map(opt => (
          <label key={opt.value} style={{ display: 'block', margin: '4px 0' }}>
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={onChange}
              
            />
            {opt.label}
          </label>
        ))}
      </fieldset>
    );
  }

    return (
        <label className="inputField">
<span className="label-text">
{label}
</span>
<input
name={name}
value={value}
type={type}
onChange={onChange}
/>
</label>
    )
}