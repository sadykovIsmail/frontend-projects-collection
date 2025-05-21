import React, { useEffect, useState } from "react";
import SectionControls from './SectionControls'
import InputFields from './InputFields'
import '../styles/AttendeeInfo.css'

export default function AttendeeInfo ({onSubmit, data}){
const[isEditing, setIsEditing] = useState(true)
const[form, setForm] = useState({
    name: "", email: "", phone: ""
})


    useEffect(()=> {
        if(data) setForm(data)
    }, [data])

function handleChange (e) {
const {name, value} = e.target
setForm(prev => ({...prev, [name]: value}))
}

function handleSubmit () { 
setIsEditing(false)
onSubmit(form)
}

function handleEdit () {
    setIsEditing(true)
}

return(
    <section className="info">
    <h2>Attendee Info</h2>
{isEditing ? (
<>
<InputFields 
    label= 'Name' name='name' value={form.name} onChange={handleChange}
    />
<InputFields
label='Email' name='email' value={form.email} onChange={handleChange}
/>
<InputFields 
label='Phone number' name='phone' value={form.phone} onChange={handleChange}
/>

</>
) : (
<>
<p><strong>Name:</strong>{form.name}</p>
<p><strong>Email:</strong>{form.email}</p>
<p> <strong>Phone number:</strong>{form.phone}</p>

</>
)}

<SectionControls 
isEditing={isEditing}
onEdit={handleEdit}
onSubmit={handleSubmit}

/>
    </section>
    
)

};