import React from 'react';

import SideNavBar from "../side-nav-bar/SideNavBar"

const AdminDashboard = () => {
    return (
        <div className="flex">
            <SideNavBar/>
            <div className="bg-gray-100 flex-1">
                <h5 className="text-red-500 ml-60 text-5xl"> Admin dashboard</h5>
            </div>

        </div>
    );
}

export default AdminDashboard;