import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SideNavBar from "../side-nav-bar/SideNavBar";
import { adminTeamSelector, adminTeamLoadFlow } from "../../middleware/adminTeamSlice";
import Table from "./table/Table";
import { columns } from "./table/columns";
import CreateBatch from "./CreateBatch";
import CreateTeam from "./CreateTeam";
import useBatchSearchField from "shared/hooks/useBatchSearchField"


const AdminTeam = () => {
    const dispatch = useDispatch()
    const { loading, error, adminTeamList, adminBatchList } = useSelector(adminTeamSelector)
    const [showModalBatch, setShowModalBatch] = useState(false)
    const [showModalTeam, setShowModalTeam] = useState(false)
    const searchedField = useBatchSearchField()

    const newAdminTeamList = adminTeamList?.map(team => {
        var mentee = "";
        team.mentee?.map(m => {
            mentee = mentee + m + ",  "
        })
        const batch = adminBatchList.find(o => o.name === team.batch)
        return {
            startdate: batch ? batch.startdate : "dummydate",
            name: team.name,
            batch: team.batch,
            mentor: team.mentor,
            mentee: mentee,
        }
    })

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
                    <div>
                        <div className=" mx-5 my-3 flex space-x-5">
                            <input
                                className="shadow appearance-none border h-8 rounded-lg py-2 ml-6 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48"
                                name="test"
                                type="text"
                                value={searchedField.value}
                                onChange={searchedField.onChange}
                                placeholder="search by batch"
                                required
                            />
                            <button onClick={openModalBatch} className="btn ">Add Batch</button>
                            <button onClick={openModalTeam} className="btn ">Add Team</button>
                        </div>
                    </div>
                    <div>
                        <Table columns={columns} data={newAdminTeamList} />
                    </div>
                </div>
                <CreateBatch isOpen={showModalBatch}
                    onRequestClose={closeModalBatch} />
                <CreateTeam isOpen={showModalTeam}
                    onRequestClose={closeModalTeam} />

            </div>
        </div>
    );
}

export default AdminTeam;