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
        <div className="side-nav-bar-mentor" style ={{ width : props.width}}>
            <button onClick={props.closeNav}>X</button>
            <Link to="/mentor/dashboard" onMouseEnter={highlightColor} onMouseLeave={leaveColor}>Dashboard</Link>
            <Link to="/mentor/session" onMouseEnter={highlightColor} onMouseLeave={leaveColor}>Session</Link>
            <Link to="/mentor/team" onMouseEnter={highlightColor} onMouseLeave={leaveColor}>Team</Link>
            <Link to="/mentor/profile" onMouseEnter={highlightColor} onMouseLeave={leaveColor}>Profile</Link>
        </div>
    );
}

export default NavBar;