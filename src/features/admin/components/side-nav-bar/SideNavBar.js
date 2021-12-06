import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const SideNavBar = (props) => {

    function highlightColor(e) {
        e.target.style.color = 'red';
      }

      function leaveColor(e) {
        e.target.style.color = 'black';
      }

    return (
        <div className="navbar" style ={{ width : props.width}}>
            <button onClick={props.closeNav}>X</button>
            <Link to="/" onMouseEnter={highlightColor} onMouseLeave={leaveColor}> Menu 1 </Link>
            <Link to="/" onMouseEnter={highlightColor} onMouseLeave={leaveColor}> Menu 2 </Link>
        </div>
    );
}

export default SideNavBar;