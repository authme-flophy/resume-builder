import React, { useEffect, useState } from 'react'

function Resumes() {
  
  const [resumes, setResumes] = useState([])

  useEffect(() => {
    fetch("https://resume-builder-server-app.herokuapp.com/resumes")
    .then(res => res.json())
  }, [])
  
  return (
    <div>Resumes</div>
  )
}

export default Resumes