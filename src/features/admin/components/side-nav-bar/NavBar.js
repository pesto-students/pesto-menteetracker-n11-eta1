import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = (props) => {

    function highlightColor(e) {
        e.target.style.color = 'red';
      }

      function leaveColor(e) {
        e.target.style.color = 'black';
      }

    return (
        <div className="navbar" style ={{ width : props.width}}>
            <button onClick={props.closeNav}>X</button>
            <Link to="/admin/dashboard" onMouseEnter={highlightColor} onMouseLeave={leaveColor}>Dashboard</Link>
            <Link to="/admin/mentee" onMouseEnter={highlightColor} onMouseLeave={leaveColor}>Mentees</Link>
            <Link to="/admin/mentor" onMouseEnter={highlightColor} onMouseLeave={leaveColor}>Mentors</Link>
            <Link to="/admin/team" onMouseEnter={highlightColor} onMouseLeave={leaveColor}>Teams</Link>
        </div>
    );
}

export default NavBar;