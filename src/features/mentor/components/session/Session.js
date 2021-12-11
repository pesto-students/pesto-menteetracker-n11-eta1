import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { mentorSessionSelector, mentorSessionLoadFlow } from "../../middleware/mentorSessionSlice"
import Table from "../../../../shared/components/table/Table"
import { columns } from "./columns"


const MentorSession = () => {
    const dispatch = useDispatch()
    const { loading, error, mentorSessionList } = useSelector(mentorSessionSelector)

    useEffect(() => {
        dispatch(mentorSessionLoadFlow())
    }, [])

    return (
        <div>
            <SideNavBar />
            Mentor Session
            <Table columns={columns} data={mentorSessionList} />
        </div>
    );
}

export default MentorSession;