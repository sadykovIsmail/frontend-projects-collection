import React from "react";
import '.../styles/SectionControls.css'

export default function ({isEditing, onEdit, onSubmit}){
{isEditing ? <button onClick={onSubmit}>
    Submit
</button> : <button onClick={onEdit}>
    Edit
</button>}
}