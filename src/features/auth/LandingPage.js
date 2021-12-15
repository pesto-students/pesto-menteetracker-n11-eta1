import React from 'react';

import AppNavBar from "./components/nav-bar/AppNavBar"

const LandingPage = () => {

    return (
        <div>
            <div>
                <AppNavBar></AppNavBar>
            </div>
            <div style={{  marginTop:"100px"}}>
                Home Page
            </div>
        </div>
    );
}

export default LandingPage;
