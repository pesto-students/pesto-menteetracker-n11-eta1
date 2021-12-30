import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { mentorSessionSelector, mentorSessionLoadFlow } from "../../middleware/mentorSessionSlice"
import Table from "../session-table/Table"
import { columns } from "./columns"
import useShowHideModal from "shared/hooks/useShowHideModal";
import CreateEditSession from "./CreateEditSession"

const MentorSession = () => {
    const dispatch = useDispatch()
    const { loading, error, mentorSessionList } = useSelector(mentorSessionSelector)
    const { showModal, openModal, closeModal } = useShowHideModal()

    useEffect(() => {
        dispatch(mentorSessionLoadFlow())
    }, [])

    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            <div className="flex-1 ml-20 h-screen">
                <button onClick={openModal} className="btn mx-5 my-3">Create Session</button>
                <Table columns={columns} data={mentorSessionList} />
                <CreateEditSession isOpen={showModal}
                    onRequestClose={closeModal} isEdit={false} id={null} />
            </div>
        </div>
    );
}

export default MentorSession;