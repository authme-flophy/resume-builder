import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../App.css"

function Resumes() {
  
  const [resumes, setResumes] = useState([])

  useEffect(() => {
    fetch("https://resume-builder-server-app.herokuapp.com/resumes")
    .then(res => res.json())
    .then(data => setResumes(data))
  }, [])
  
  return (
    <div className='resume-container'>
      <div className="resume-nav">
        {
          resumes.map(resume => <NavLink className="resume-nav-links" to={`/resumes/${resume.id}`} key={resume.id}>{resume.name.toUpperCase()}</NavLink>)
        }
      </div>
      <Outlet className="outlet-div"/>
    </div>
  )
}

export default Resumes