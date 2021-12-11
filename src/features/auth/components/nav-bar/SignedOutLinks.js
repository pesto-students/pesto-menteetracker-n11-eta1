import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
      <div >
        <div className="item"><NavLink to='/signin'>SignIn</NavLink></div>
        <div className="item"><NavLink to='/signup'>SignUp</NavLink></div>
      </div>

  )
}

export default SignedOutLinks