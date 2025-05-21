import React from "react";
import '.../styles/SectionControls.css'

export default function SectionControls ({isEditing, onEdit, onSubmit}){
return isEditing ? <button onClick={onSubmit}>
    Submit
</button> : <button onClick={onEdit}>
    Edit
</button>
}