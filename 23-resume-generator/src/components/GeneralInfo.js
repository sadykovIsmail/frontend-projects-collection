import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import SectionControls from './SectionControls';
import '../styles/GeneralInfo.css';

export default function GeneralInfo({ data, onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const [form, setForm] = useState({
    name: '', email: '', phone: ''
  });

  // when parent data arrives, preload it
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
    <section className="general-info">
      <h2>General Information</h2>

      {isEditing
        ? <>
            <InputField
              label="Full Name"  name="name"
              value={form.name} onChange={handleChange}
            />
            <InputField
              label="Email"      name="email" type="email"
              value={form.email} onChange={handleChange}
            />
            <InputField
              label="Phone"      name="phone" type="tel"
              value={form.phone} onChange={handleChange}
            />
          </>
        : <>
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Email:</strong> {form.email}</p>
            <p><strong>Phone:</strong> {form.phone}</p>
          </>}

      <SectionControls
        isEditing={isEditing}
        onSubmit={handleSubmit}
        onEdit={handleEdit}
      />
    </section>
  );
}
