import React from 'react';
import { Link } from "react-router-dom"
import SignedOutLinks from './SignedOutLinks'
import { Navbar, Container, Nav } from "react-bootstrap"

import "./style.css"

const AppNavBar = () => {
    return (
        <div className="navbar-horizontal">
            <h3>Pesto Mentee Tracker</h3>
            <SignedOutLinks></SignedOutLinks>
        </div>
    );
}

export default AppNavBar;