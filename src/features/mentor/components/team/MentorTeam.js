import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { mentorTeamSelector, mentorTeamLoadFlow } from "../../middleware/mentorTeamSlice"
import Table from "../../../../shared/components/table/Table"
import { columns } from "./columns"

const MentorTeam = () => {
    const dispatch = useDispatch()
    const { loading, error, mentorTeamList } = useSelector(mentorTeamSelector)

    useEffect(() => {
        dispatch(mentorTeamLoadFlow())
    }, [])

    return (
        <div>
            <SideNavBar />
            Mentor Team
            <Table columns={columns} data={mentorTeamList} />
        </div>
    );
}

export default MentorTeam;