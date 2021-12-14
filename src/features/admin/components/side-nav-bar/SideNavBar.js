import React, { useState } from 'react';

import LiDashboard from "./LiDashboard"
import LiMentee from "./LiMentee"
import LiMentor from "./LiMentor"
import LiTeam from "./LiTeam"

const SideNavBar = () => {

    return (
        <div >
            <div className="min-h-screen flex flex-row bg-gray-100 ">
                <div className="flex flex-col w-56 bg-white  ">
                    <div className="flex items-center justify-center shadow-md font-bold h-14">
                        <h1 className="text-lg text-indigo-500">Pesto Admin</h1>
                    </div>
                    <ul className="flex flex-col py-4">
                        <LiDashboard />
                        <LiMentee />
                        <LiMentor />
                        <LiTeam />
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default SideNavBar;
