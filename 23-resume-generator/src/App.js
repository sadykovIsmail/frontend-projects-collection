import React from 'react';
import { useState } from 'react';

function Input({ label, type = 'text' }) {
  const [text, setText] = useState('');
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <label style={{ display: 'block', margin: '.5rem 0' }}>
      {label}
      <input
        type={type}
        value={text}
        onChange={handleChange}
        style={{ marginLeft: '.5rem' }}
      />
    </label>
  );
}

export default function Resume() {
  const generalFields = [
    { label: 'Name' },
    { label: 'Email', type: 'email' },
    { label: 'Phone number', type: 'tel' },
  ];
  const educationFields = [
    { label: 'School name' },
    { label: 'Title of study' },
    { label: 'Date of study', type: 'date' },
  ];
  const experienceFields = [
    { label: 'Company name' },
    { label: 'Position title' },
    { label: 'Main responsibilities' },
    { label: 'Date from', type: 'date' },
    { label: 'Date to',   type: 'date' },
  ];

  return (
  
    <form onSubmit={submitted}>
    <h1>Resume</h1>

      <section>
        <h2>General</h2>
        {generalFields.map(f => (
          <Input key={f.label} label={f.label} type={f.type} />
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {educationFields.map(f => (
          <Input key={f.label} label={f.label} type={f.type} />
        ))}
      </section>

      <section>
        <h2>Experience</h2>
        {experienceFields.map(f => (
          <Input key={f.label} label={f.label} type={f.type} />
        ))}
      </section>
      <button type='submit'>
        Submit
      </button>
      </form>
      
    
  );
}


function submitted (){
  <h1> Thanks</h1>
}