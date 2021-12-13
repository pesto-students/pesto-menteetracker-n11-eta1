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
            <div>
                Mentor Profile
            {mentor && mentor.uid}
            </div>
        </div>
    );
}

export default MentorProfile;