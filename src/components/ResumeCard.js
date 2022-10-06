import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../App.css"

function ResumeCard() {

  const [resume, setResumes] = useState({})

  let params = useParams()

  
  useEffect(() => {
    fetch(`https://resume-builder-server-app.herokuapp.com/resumes/${parseInt(params.resumeId)}`)
    .then(res => res.json())
    .then(data => {
      resumeRef.current = data
      setResumes(resumeRef.current)
    })
  }, [params.resumeId])
  
  const resumeRef = useRef(resume);
  
  return (
    <div className='resume-display'>
      <div id='resume-header'>
        <h1>{resume.name}</h1>
        <p>{resume.phone} || {resume.email}</p>
      </div>
      <div id='job-title'>
        <h1>{resume.jobTitle}</h1>
      </div>
      <div id='summary'>
        <p>{resume.summary}</p>
      </div>
      <div id='skills'>
        <h1>SKILLS</h1>
        <p>{resume.skills}</p>
      </div>
      <div id='education'>
        <h1>EDUCATION</h1>
        <h3><i>secondary</i> : {resume.secondarySchool}</h3>
        <h3><i>primary</i> : {resume.primarySchool}</h3>
      </div>
      <div id="experience">
        <h1>EXPERIENCE</h1>
        <h2>{resume.experience}</h2>
      </div>


    </div>
  )
}

export default ResumeCard