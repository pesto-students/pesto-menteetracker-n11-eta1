import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { adminTeamSelector, adminTeamLoadFlow } from "../../middleware/adminTeamSlice"
import Table from "../../../../shared/components/table/Table"
import { columns } from "./columns"

const AdminTeam = () => {
    const dispatch = useDispatch()
    const { loading, error, adminTeamList } = useSelector(adminTeamSelector)

    useEffect(() => {
        dispatch(adminTeamLoadFlow())
    }, [])

    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            <div className="flex-1">
               <div className="h-14 bg-white text-center py-3 text-1xl text-blue-500 shadow-md font-bold">
                   Teams
               </div>
               <Table columns={columns} data={adminTeamList} />
            </div>
        </div>
    );
}

export default AdminTeam;