import React, { useEffect, useState } from "react";
import SectionControls from "./SectionControls";
import InputFields from "./InputFields";
import "../styles/ChooseTicket.css"

export default function ChooseTickets ({
    onSubmit, data 
}) {
const[isEditing, setIsEditing] = useState(true)
const[form, setForm] = useState({type: '', quantity: '', AddOns: ''})

useEffect(() => {
    if(data) setForm(data)
}, [data])

function handleChange (e) {
const {name, value} = e.target
setForm(prev => ({...prev, [name]: value}))
}

function handleSubmit() {
setIsEditing(false)
onSubmit(form)
}

function handleEdit() {
    setIsEditing(true)
}

return(
    <section className="chooseTicket">
<h2>Choose ticket</h2>
{isEditing ? 
<>
<InputFields 
label='Ticket type' name='type' onChange={handleChange} type="radio" options={[{value: "standard", label: 'Standard'}, {value: 'vip', label: 'Vip'}]} value={form.type}/>
<InputFields label='Quantity' name='quantity' onChange={handleChange} type="number" value={form.quantity}/>
<InputFields label='Add-Ons (optional)' name='addOns' onChange={handleChange} type="text" value={form.AddOns}/> 
</>
:
<>
<p><strong>Ticket type:</strong>{form.type}</p>
<p><strong>Quantity:</strong>{form.quantity}</p>
<p><strong>Add-Ons</strong>{form.AddOns}</p>
</>

}
<SectionControls
isEditing={isEditing}
onEdit={handleEdit}
onSubmit={handleSubmit}
/>

    </section>
)
}