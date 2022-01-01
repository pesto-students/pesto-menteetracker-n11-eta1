import React from 'react';

import SideNavBar from "../side-nav-bar/SideNavBar";
import PieChart from "./PieChart";
import BarChart from "./BarChart"

const MentorDashboard = () => {
    return (
        <div className="flex bg-gray-100 ">
            <SideNavBar />
            <main className="flex h-screen ml-52 mt-40">
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
    );
}

export default MentorDashboard;