import React from 'react'
import { Link } from 'wouter'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signup">Registro</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
