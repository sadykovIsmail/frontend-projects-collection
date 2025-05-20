import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import '../styles/CV.css';

export default function CV() {
  const [generalData, setGeneralData]     = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [expData, setExpData]             = useState(null);

  return (
    <div className="cv">
      <h1>Your CV</h1>
      <GeneralInfo
        data={generalData}
        onSubmit={setGeneralData}
      />
      <Education
        data={educationData}
        onSubmit={setEducationData}
      />
      <Experience
        data={expData}
        onSubmit={setExpData}
      />
    </div>
  );
}
