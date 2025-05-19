import React, { useState } from 'react';

// Uncontrolled Input: no useState here, just a name and type
function Input({ label, name, type = 'text' }) {
  return (
    <label style={{ display: 'block', margin: '.5rem 0' }}>
      {label}
      <input
        name={name}
        type={type}
        style={{ marginLeft: '.5rem' }}
      />
    </label>
  );
}

export default function Resume() {
  const [submittedData, setSubmittedData] = useState(null);

  const generalFields = [
    { label: 'Name', name: 'name' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Phone number', name: 'phone', type: 'tel' },
  ];
  const educationFields = [
    { label: 'School name', name: 'school' },
    { label: 'Title of study', name: 'studyTitle' },
    { label: 'Date of study', name: 'studyDate', type: 'date' },
  ];
  const experienceFields = [
    { label: 'Company name', name: 'company' },
    { label: 'Position title', name: 'position' },
    { label: 'Main responsibilities', name: 'responsibilities' },
    { label: 'Date from', name: 'dateFrom', type: 'date' },
    { label: 'Date to',   name: 'dateTo',   type: 'date' },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    setSubmittedData(data);
  }

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <form onSubmit={handleSubmit}>
        <h1>Resume</h1>

        <section>
          <h2>General</h2>
          {generalFields.map(f => (
            <Input key={f.name} {...f} />
          ))}
        </section>

        <section>
          <h2>Education</h2>
          {educationFields.map(f => (
            <Input key={f.name} {...f} />
          ))}
        </section>

        <section>
          <h2>Experience</h2>
          {experienceFields.map(f => (
            <Input key={f.name} {...f} />
          ))}
        </section>

        <button type="submit" style={{ marginTop: '1rem', padding: '.5rem 1rem' }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Submitted Data</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>School:</strong> {submittedData.school}</p>
          <p><strong>Study Title:</strong> {submittedData.studyTitle}</p>
          <p><strong>Study Date:</strong> {submittedData.studyDate}</p>
          <p><strong>Company:</strong> {submittedData.company}</p>
          <p><strong>Position:</strong> {submittedData.position}</p>
          <p><strong>Responsibilities:</strong> {submittedData.responsibilities}</p>
          <p><strong>From:</strong> {submittedData.dateFrom}</p>
          <p><strong>To:</strong> {submittedData.dateTo}</p>
        </div>
      )}
    </div>
  );
}
