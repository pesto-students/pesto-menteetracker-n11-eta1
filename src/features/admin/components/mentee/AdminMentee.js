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
        <div>
            <SideNavBar></SideNavBar>
            <button onClick={openModal}>Add Mentee</button>
            Admin Mentee Tab
            { menteeList && menteeList.map(mentee => {
                return <Menteecard mentee={mentee} key={mentee._id} />
            })}
            <CreateMentee isOpen={showModal}
                onRequestClose={closeModal}></CreateMentee>
        </div>
    );
}

export default AdminMentee;