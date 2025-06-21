import React, { useState, useEffect } from 'react';
import InputField from './InputField.jsx';
import SectionControls from './SectionControls.jsx';
import '../styles/Experience.css';

export default function Experience({ data, onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const [form, setForm] = useState({
    company: '', position: '', responsibilities: '',
    dateFrom: '', dateTo: ''
  });

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }
  function handleSubmit() {
    onSubmit(form);
    setIsEditing(false);
  }
  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <section className="experience">
      <h2>Experience</h2>

      {isEditing
        ? <>
            <InputField label="Company"     name="company"
              value={form.company} onChange={handleChange}
            />
            <InputField label="Position"    name="position"
              value={form.position} onChange={handleChange}
            />
            <InputField label="Responsibilities" name="responsibilities"
              value={form.responsibilities} onChange={handleChange}
            />
            <InputField label="From" type="date" name="dateFrom"
              value={form.dateFrom} onChange={handleChange}
            />
            <InputField label="To"   type="date" name="dateTo"
              value={form.dateTo} onChange={handleChange}
            />
          </>
        : <>
            <p><strong>Company:</strong> {form.company}</p>
            <p><strong>Position:</strong> {form.position}</p>
            <p><strong>Responsibilities:</strong> {form.responsibilities}</p>
            <p><strong>Period:</strong> {form.dateFrom} – {form.dateTo}</p>
          </>}

      <SectionControls
        isEditing={isEditing}
        onSubmit={handleSubmit}
        onEdit={handleEdit}
      />
    </section>
  );
}
