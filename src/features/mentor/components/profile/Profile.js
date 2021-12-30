import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import { mentorProfileSelector, mentorProfileLoadFlow } from "../../middleware/mentorProfileSlice"
import useShowHideModal from "shared/hooks/useShowHideModal";
import EditProfile from "./EditProfile";

const MentorProfile = () => {
    const dispatch = useDispatch();
    const { loading, error, mentor } = useSelector(mentorProfileSelector);
    const { showModal, openModal, closeModal } = useShowHideModal();

    useEffect(() => {
        dispatch(mentorProfileLoadFlow())
    }, [mentor])

    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            { mentor &&
                <div className="flex-1 h-screen ml-40">
                    <button onClick={openModal} className="btn mx-5 my-3">Create Session</button>
                    <div>{mentor.uid}</div>
                    <div>{mentor.email}</div>
                </div>
            }
            <div>
                <EditProfile isOpen={showModal}
                    onRequestClose={closeModal} />
            </div>
        </div>
    );
}

export default MentorProfile;