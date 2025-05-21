import React from "react";
import '.../styles/InputFields.css'

export default function InputFields ({
label, name, type = 'text', value, onChange
}){
    return (
        <label className="inputFIld">
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