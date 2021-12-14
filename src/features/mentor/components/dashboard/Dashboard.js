import React from 'react';

import SideNavBar from "../side-nav-bar/SideNavBar"

const MentorDashboard = () => {
    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            <div className="flex-1">
                <div className="h-14 bg-white text-center py-3 text-1xl text-yellow-500 shadow-md font-bold">
                    Dashboard
               </div>
                Mentor dashboard
            </div>
        </div>
    );
}

export default MentorDashboard;