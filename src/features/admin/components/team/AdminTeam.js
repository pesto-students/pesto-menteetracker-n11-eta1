import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { adminTeamSelector, adminTeamLoadFlow } from "../../middleware/adminTeamSlice"
import Table from "../../../../shared/components/table/Table"
import { columns } from "./columns"
import CreateBatch from "./CreateBatch"
import CreateTeam from "./CreateTeam"

const AdminTeam = () => {
    const dispatch = useDispatch()
    const { loading, error, adminTeamList } = useSelector(adminTeamSelector)
    const [showModalBatch, setShowModalBatch] = useState(false)
    const [showModalTeam, setShowModalTeam] = useState(false)

    useEffect(() => {
        dispatch(adminTeamLoadFlow())
    }, [])

    const openModalBatch = () => {
        setShowModalBatch(true)
    }

    const closeModalBatch = () => {
        setShowModalBatch(false)
    }

    const openModalTeam = () => {
        setShowModalTeam(true)
    }

    const closeModalTeam = () => {
        setShowModalTeam(false)
    }

    return (
        <div className="flex ">
            <SideNavBar />
            <div className="flex-1 bg-gray-100 h-screen">
                <div className="ml-20 p-10">
                <div className="flex">
                <button onClick={openModalBatch} className="btn mx-5 my-3">Add Batch</button>
                <button onClick={openModalTeam} className="btn mx-5 my-3">Add Team</button>
                </div>
                    <div>
                        <Table columns={columns} data={adminTeamList} />
                    </div>
                </div>
                <CreateBatch isOpen={showModalBatch}
                        onRequestClose={closeModalBatch}/>
                <CreateTeam isOpen={showModalTeam}
                        onRequestClose={closeModalTeam}/>
            
            </div>
        </div>
    );
}

export default AdminTeam;