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
            <div>
                Admin Mentor Tab
            {mentorList?.map(mentor => {
                return <MentorCard mentor={mentor} key={mentor._id} />
            })}
            </div>
        </div>
    );
}

export default AdminMentor;