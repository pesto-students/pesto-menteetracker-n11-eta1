import React, { useEffect, useState } from 'react';

import SideNavBar from "../side-nav-bar/SideNavBar";
import PieChart from "./PieChart";
import BarChart from "./BarChart"

const MentorDashboard = () => {
    const [mentor, setMentor] = useState("");

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem('user'))
        setMentor(user.email)
    })
    return (
        <div className="flex bg-gray-100 ">
            <SideNavBar />
            <div>
                <div className="ml-52 pl-5 mt-28 text-2xl text-indigo-900">{mentor}</div>
            <main className="flex h-screen ml-52 mt-5">
                
                <div>
                    <div className="flex text-2xl mb-8">
                        Mentor Time Distribution by Team
                        <h1 className="text-base pl-2 pt-1">(Hours)</h1>
                    </div>
                    <PieChart />
                </div>
                <div>
                    <div className="flex text-2xl mb-5 ml-36">
                        Mentor Total Time Distribution by Batches
                        <h1 className="text-base pl-2 pt-1">(Hours)</h1>
                    </div>
                    <BarChart />
                </div>
            </main>
            </div>
        </div>
    );
}

export default MentorDashboard;