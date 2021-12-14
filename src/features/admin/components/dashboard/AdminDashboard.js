import React from 'react';

import SideNavBar from "../side-nav-bar/SideNavBar"

const AdminDashboard = () => {
    return (
        <div className="flex">
            <SideNavBar />
            <div className="bg-gray-100 flex-1">
               <div className="h-14 bg-white text-center py-3 text-1xl text-blue-500 shadow-md font-bold">
                    Dashboard
               </div>
                <h5 className=" ml-60 text-1xl"> Admin dashboard</h5>
            </div>

        </div>
    );
}

export default AdminDashboard;