import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { mentorSelector, mentorLoadFlow } from "../../middleware/mentorSlice"
import MentorCard from "./mentorCard"


const AdminMentor = () => {
    const dispatch = useDispatch()
    const { loading, error, mentorList } = useSelector(mentorSelector)

    useEffect(() => {
        dispatch(mentorLoadFlow())
    }, [])

    return (
        <div className="flex bg-gray-100">
            <SideNavBar></SideNavBar>
           <div className="flex-1">
           <div className=" h-14 bg-white text-center py-3 text-1xl text-blue-500 shadow-md font-bold">
                    Mentors
            </div>
            <div className="m-10 grid grid-cols-3 gap-7">
                {mentorList?.map(mentor => {
                    return <MentorCard mentor={mentor} key={mentor._id} />
                })}
            </div>
           </div>
        </div>
    );
}

export default AdminMentor;