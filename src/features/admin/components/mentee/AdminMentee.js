import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import Menteecard from "./MenteeCard"
import { menteeSelector, menteeLoadFlow } from "../../middleware/menteeSlice"
import CreateMentee from "./CreateMentee"

const AdminMentee = () => {
    const dispatch = useDispatch()
    const { loading, error, menteeList } = useSelector(menteeSelector)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        dispatch(menteeLoadFlow())
    }, [])

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <div className="bg-gray-100 flex">
            <SideNavBar />
            <div className="flex-1">
                <div className="h-14 bg-white text-center py-3 text-1xl text-blue-500 shadow-md font-bold">
                    Dashboard
               </div>
                <button onClick={openModal} className="btn mx-5 my-3">Add Mentee</button>
                <div className="m-10 grid grid-cols-3 gap-7">
                    {menteeList?.map(mentee => {
                        return <Menteecard mentee={mentee} key={mentee._id} />
                    })}
                </div>
                <CreateMentee isOpen={showModal}
                    onRequestClose={closeModal}></CreateMentee>
            </div>
        </div>
    );
}

export default AdminMentee;