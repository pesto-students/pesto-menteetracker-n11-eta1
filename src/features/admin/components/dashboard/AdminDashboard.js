import React from 'react';

import SideNavBar from "../side-nav-bar/SideNavBar"

const AdminDashboard = () => {
    return (
        <div className="flex">
            <SideNavBar />
            <main className="bg-gray-100 flex-1 h-screen">

                <h5 className=" ml-60 text-1xl"> Admin dashboard</h5>
            </main>

        </div>
    );
}

export default AdminDashboard;