import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav-links" to="/resumes">Resumes</Link>
      <Link className="nav-links" to="/resumefacts">Resume Facts</Link>
    </nav>
  )
}

export default Navbar