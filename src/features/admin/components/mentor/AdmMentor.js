import React , { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { mentorSelector, mentorLoadFlow } from "../../middleware/mentorSlice"
import MentorCard from "./mentorCard"


const AdmMentor = () => {
    const dispatch = useDispatch()
    const { loading, error, mentorList } = useSelector(mentorSelector)

    useEffect(() => {
        dispatch(mentorLoadFlow())
    }, [])

    return (  
        <div>
            <SideNavBar></SideNavBar>
            Admin Mentor Tab
            { mentorList && mentorList.map(mentor => {
                return <MentorCard mentor={mentor} key={mentor._id} />
            })}
        </div>
    );
}
 
export default AdmMentor;