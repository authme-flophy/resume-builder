import React, { useState } from 'react'
import "../App.css"

function CreateResume() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [job, setJob] = useState("")
  const [summary, setSummary] = useState("")
  const [skills, setSkills] = useState("")
  const [primary, setPrimary] = useState("")
  const [secondary, setSecondary] = useState("")
  const [prevJob, setPrevJob] = useState("")

  function handleSubmit(e){

    e.preventDefault()

    const newContact = {
      name: name,
      phone: phone,
      email: email,
      jobTitle: job,
      summary: summary,
      skills: skills,
      primarySchool: primary,
      secondarySchool: secondary,
      experience: prevJob
    };

    fetch("https://resume-builder-server-app.herokuapp.com/resumes", {
      method: "POST",
      headers: {"content-type":"application/json"},
      body: JSON.stringify(newContact)
    }).then(res => console.log(res.status))

    setEmail("")
    setJob("")
    setName("")
    setPhone("")
    setPrevJob("")
    setPrimary("")
    setSecondary("")
    setSkills("")
    setSummary("")
  
  }

  return (
    <div className='form-container'>
      <form action="" id="form">
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Full Names"/>
        <input type="tel" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"/>
        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        <input type="text" onChange={(e) => setJob(e.target.value)} placeholder="Your Title"/>
        <textarea rows="4" cols="50"onChange={(e) => setSummary(e.target.value)} placeholder="Say something about yourself"/>
        <input type="text" onChange={(e) => setSkills(e.target.value)} placeholder="Prefered programming language"/>
        <input type="text" onChange={(e) => setPrimary(e.target.value)} placeholder="Primary School"/>
        <input type="text" onChange={(e) => setSecondary(e.target.value)} placeholder="Secondary School"/>
        <input type="text" onChange={(e) => setPrevJob(e.target.value)} placeholder="Previous Employer"/>
        <button id="submit-button" type="submit" onClick={(e) => handleSubmit(e)}>Create Resume</button>
      </form>
    </div>
  )
}

export default CreateResume