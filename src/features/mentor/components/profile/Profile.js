import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { mentorProfileSelector, mentorProfileLoadFlow } from "../../middleware/mentorProfileSlice"

const MentorProfile = () => {
    const dispatch = useDispatch()
    const { loading, error, mentor } = useSelector(mentorProfileSelector)

    useEffect(() => {
        dispatch(mentorProfileLoadFlow())
    }, [])

    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            <div className="flex-1">
                <div className="h-14 bg-white text-center py-3 text-1xl text-yellow-500 shadow-md font-bold">
                    Profile
               </div>
                {mentor && mentor.uid}
            </div>
        </div>
    );
}

export default MentorProfile;