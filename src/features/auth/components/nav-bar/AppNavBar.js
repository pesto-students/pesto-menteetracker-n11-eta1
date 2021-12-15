import React from 'react';
import SignedOutLinks from './SignedOutLinks'

import "./style.css"

const AppNavBar = () => {
    return (
        <div className="navbar-horizontal">
            <h3>Pesto Mentee Tracker</h3>
            <SignedOutLinks/>
        </div>
    );
}

export default AppNavBar;