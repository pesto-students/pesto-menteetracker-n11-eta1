import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { mentorTeamSelector, mentorTeamLoadFlow } from "../../middleware/mentorTeamSlice"
import Table from "shared/components/table/Table"
import { columns } from "./columns";
import { batchSelector, batchLoadFlow } from "features/admin/middleware/batchSlice";

const MentorTeam = () => {
    const dispatch = useDispatch()
    const { loading, error, mentorTeamList } = useSelector(mentorTeamSelector)
    const { loadingBatch, errorBatch, batchList } = useSelector(batchSelector);

    useEffect(() => {
        dispatch(mentorTeamLoadFlow())
        dispatch(batchLoadFlow())
    }, [])

    const newMentorTeamList = mentorTeamList?.map(team => {
        var mentee = "";
        team.mentee?.map(m => {
            mentee = mentee + m + ",  "
        })
        const batch = batchList.find(o => o.name === team.batch)
        return {
            startdate: batch ? batch.startdate : "dummydate",
            name: team.name,
            batch: team.batch,
            team: team.name,
            mentee: mentee,
        }
    })

    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            <div className="flex-1 h-screen ml-20">
                <div className="text-lg font-bold text-indigo-900 ml-10 mt-10">Mentor Teams</div>
                <Table columns={columns} data={newMentorTeamList} />
            </div>
        </div>
    );
}

export default MentorTeam;