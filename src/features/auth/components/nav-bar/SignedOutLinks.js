import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul >
        <li><NavLink to='/signin'>SignIn</NavLink></li>
        <li><NavLink to='/signup'>SignUp</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks