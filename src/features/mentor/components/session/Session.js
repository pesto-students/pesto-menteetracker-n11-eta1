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
        <div className="flex bg-gray-100">
            <SideNavBar />
            <div className="flex-1 ml-20 h-screen">
                <Table columns={columns} data={mentorSessionList} />
            </div>
        </div>
    );
}

export default MentorSession;