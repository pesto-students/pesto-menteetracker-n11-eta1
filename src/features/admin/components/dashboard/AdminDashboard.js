import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import { mentorSelector, mentorLoadFlow } from "../../middleware/mentorSlice";


const AdminDashboard = () => {

    const dispatch = useDispatch();
    const { loading, error, mentorList } = useSelector(mentorSelector);
    const [filter, setFilter] = useState(mentorList.length > 0 ? mentorList[0].uid : "")

    useEffect(() => {
        if (mentorList.length > 0) {
            setFilter(mentorList[0].uid)
        } else {
            dispatch(mentorLoadFlow());
        }
    }, [mentorList])

    const handleChangeFilter = (e) => {
        const value = e.target.value
        setFilter(value)
    }

    const getFilter = () => {
        const result = (
            <div className="flex space-x-5 mb-10">
                <label className="text-lg">
                    Select Mentor
                </label>
                <select value={filter} onChange={handleChangeFilter} 
                 className="w-28 p-1"
                >
                    {mentorList?.map((mentor, index) => {
                        return (
                            <option value={mentor.uid} key={mentor.uid}>{mentor.name}</option>
                        );
                    }
                    )}
                </select>
            </div>
        )
        return result;
    }

    return (
        <div className="flex bg-gray-100 ">
            <SideNavBar />
            <div className="flex h-screen ml-52 mt-32">
                <div>
                    <div className="flex text-2xl mb-5">
                        Mentor Time Distribution by Team
                        <h1 className="text-base pl-2 pt-1">(Hours)</h1>
                    </div>
                    {getFilter()}
                    <PieChart mentorId={filter} />
                </div>
                <div>
                    <div className="flex text-2xl mb-5 ml-36">
                        Mentor Total Time Distribution
                        <h1 className="text-base pl-2 pt-1">(Hours)</h1>
                    </div>
                    <BarChart />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;