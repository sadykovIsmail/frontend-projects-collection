import React, { useEffect, useState } from "react";
import InputFields from "./InputFields.jsx";
import SectionControls from "./SectionControls.jsx";
import '../styles/AdditionalDetails.css'

export default function AdditionalDetails ({
    onSubmit, data
}) {
const[isEditing, setIsEditing] = useState(true)
const[form, setForm] = useState({ diet: '', accessibility: '', comments: '' }
)

useEffect(() => {
  if (data) setForm(data);
}, [data]);


function handleChange (e) {
const{name, value} = e.target
setForm(prev => ({...prev, [name]: value}))
}

function handleEdit () {
    setIsEditing(true)
}

function handleSubmit () {
    onSubmit(form)
    setIsEditing(false)
}

return(
    <section className="additional">
        <h2>Additional Details</h2>
        {isEditing ? (
<>
        <InputFields type="text" name="diet" onChange={handleChange} value={form.diet} label='Dietary needs'/> 
    <InputFields type="text" name='accessibility' onChange={handleChange} value={form.accessibility} label="Accessibility requests"/>
    <InputFields type="text" name="comments" onChange={handleChange} value={form.comments} label='Comments'/>
        </>
        ) : (
<>
    <p><strong>Dietary needs:</strong>{form.diet}</p>
    <p><strong>Accessibility requests:</strong>{form.accessibility}</p>
    <p><strong>Comments:</strong>{form.comments}</p>
    </>
        )}

    <SectionControls
    isEditing={isEditing}
    onEdit={handleEdit}
    onSubmit={handleSubmit}
    />
    </section>
)
}