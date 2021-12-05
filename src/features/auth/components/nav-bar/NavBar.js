import React from 'react';
import { Link } from "react-router-dom"
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav >
            <div >
                <Link to='/' >Pesto Mentee Tracker</Link>
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default Navbar;