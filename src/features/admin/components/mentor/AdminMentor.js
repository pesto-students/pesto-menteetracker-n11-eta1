import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { mentorSelector, mentorLoadFlow } from "../../middleware/mentorSlice";
import MentorCard from "./mentorCard"
import  CreateMentor  from "./CreateMentor"


const AdminMentor = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const { loading, error, mentorList } = useSelector(mentorSelector)

    useEffect(() => {
        dispatch(mentorLoadFlow())
    }, [])

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <div className="flex bg-gray-100">
            <SideNavBar></SideNavBar>
            <main className="h-screen">
                <div >
                    <button onClick={openModal} className="btn mx-10 my-3 mb-10">Add Mentor</button>
                    <div className="mx-10 text-2xl text-indigo-900">Mentors</div>
                    <div className="m-10 grid grid-cols-3 gap-7">
                        {mentorList?.map(mentor => {
                            return <MentorCard mentor={mentor} key={mentor._id} />
                        })}
                    </div>
                    <CreateMentor isOpen={showModal}
                        onRequestClose={closeModal}/>
                </div>
            </main>
        </div>
    );
}

export default AdminMentor;