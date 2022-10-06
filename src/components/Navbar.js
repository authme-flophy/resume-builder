import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="links" to="/resumes">Resumes</Link>
      <Link className="links" to="/resumefacts">Resume Facts</Link>
    </nav>
  )
}

export default Navbar