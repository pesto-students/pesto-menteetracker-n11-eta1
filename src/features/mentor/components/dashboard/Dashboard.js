import React from 'react';

import SideNavBar from "../side-nav-bar/SideNavBar"

const MentorDashboard = () => {
    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            <main className="bg-gray-100 flex-1 h-screen">
                <h5 className=" ml-60 text-1xl">Mentor Dashboard</h5>
            </main>
        </div>
    );
}

export default MentorDashboard;