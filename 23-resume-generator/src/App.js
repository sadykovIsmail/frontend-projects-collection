import React from "react";
import { useState } from "react";

export default function() {
  const [text, setText] = useState('')

  function changeHandler (e) {
    setText(e.target.value)
  }
  return(
    <>
    <h1>
      Resume
    </h1>
    <section key="general">
  <p> General</p>
    <label>
Name
<input type="text" value={text} onChange={changeHandler}></input>
    </label>
    <label>
Email
<input type="text" value={text} id="name"  onChange={changeHandler}></input>
    </label>
    <label>
Phone number
<input type="text" value={text} id="name"  onChange={changeHandler}></input>
    </label>

    </section>

    <section key="education">
  <p>Education</p>
    <label>
School name
<input type="text" value={text} id="name"  onChange={changeHandler}></input>
    </label>
    <label>
Title of study
<input type="text" value={text} id="name"  onChange={changeHandler}></input>
    </label>
    <label>
Date of study
<input type="text" value={text} id="name"  onChange={changeHandler}></input>
    </label>

    </section>

    <section key="experience">
  <p>Experience</p>
    <label>
Company name
<input type="text" value={text} id="name"  onChange={changeHandler}></input>
    </label>
    <label>
Position title
<input type="text" value={text} id="name"  onChange={changeHandler}></input>
    </label>
    <label>
Main responsibilities 
<input type="text" value={text} id=""  onChange={changeHandler}></input>
    </label>

    <label>
Date from: 
<input type="number" value={text} id="date.from"  onChange={changeHandler}></input>
    </label>

<label>
Date to: 
<input type="number" value={text} id="date-to"  onChange={changeHandler}></input>
    </label>
    </section>
    
    </>
  )
}