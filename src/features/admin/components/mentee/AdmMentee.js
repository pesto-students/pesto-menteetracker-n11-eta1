import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import Menteecard from "./MenteeCard"
import { menteeSelector, menteeLoadFlow } from "../../middleware/menteeSlice"

const AdmMentee = () => {
    const dispatch = useDispatch()
    const { loading, error, menteeList } = useSelector(menteeSelector)

    useEffect(() => {
        dispatch(menteeLoadFlow())
    }, [])


    return (
        <div>
            <SideNavBar></SideNavBar>
            Admin Mentee Tab
            { menteeList && menteeList.map(mentee => {
                return <Menteecard mentee={mentee} key={mentee._id} />
            })}
        </div>
    );
}

export default AdmMentee;