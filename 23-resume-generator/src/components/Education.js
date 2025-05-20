import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import SectionControls from './SectionControls';
import '../styles/Education.css';

export default function Education({ data, onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const [form, setForm] = useState({
    school: '', studyTitle: '', studyDate: ''
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
    <section className="education">
      <h2>Education</h2>

      {isEditing
        ? <>
            <InputField
              label="School Name"  name="school"
              value={form.school} onChange={handleChange}
            />
            <InputField
              label="Title of Study" name="studyTitle"
              value={form.studyTitle} onChange={handleChange}
            />
            <InputField
              label="Date of Study"  name="studyDate" type="date"
              value={form.studyDate} onChange={handleChange}
            />
          </>
        : <>
            <p><strong>School:</strong> {form.school}</p>
            <p><strong>Title:</strong> {form.studyTitle}</p>
            <p><strong>Date:</strong> {form.studyDate}</p>
          </>}

      <SectionControls
        isEditing={isEditing}
        onSubmit={handleSubmit}
        onEdit={handleEdit}
      />
    </section>
  );
}
