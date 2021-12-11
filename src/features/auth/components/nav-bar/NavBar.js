import React from 'react';
import { Link } from "react-router-dom"
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-5">
            <div className="container">
                <Link to="/" className="brand-logo">Pesto Mentee Tracker</Link>
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default Navbar;