import React from 'react';

import SideNavBar from "../side-nav-bar/SideNavBar";
import PieChart from "./PieChart";
import BarChart from "./BarChart"

const MentorDashboard = () => {
    return (
        <div className="flex bg-gray-100 ">
            <SideNavBar />
            <main className="flex h-screen ml-52 mt-40">
                <PieChart />
                <BarChart />
            </main>
        </div>
    );
}

export default MentorDashboard;