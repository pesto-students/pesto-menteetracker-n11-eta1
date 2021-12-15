import React, { useState } from 'react';

import LiDashboard from "./LiDashboard"
import LiSession from "./LiSession"
import LiTeam from "./LiTeam"
import LiProfile from "./LiProfile"

const SideNavBar = () => {

    return (
        <div >
            <div className="min-h-screen flex flex-row bg-gray-100 ">
                <div className="flex flex-col w-56 bg-white rounded-r-3xl">
                    <div className="flex items-center justify-center h-20 shadow-md font-bold">
                        <h1 className="text-lg text-yellow-500">Pesto Mentor</h1>
                    </div>
                    <ul className="flex flex-col py-4">
                        <LiDashboard />
                        <LiSession />
                        <LiTeam />
                        <LiProfile />
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default SideNavBar;
