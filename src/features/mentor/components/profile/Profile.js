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
    }, [])
    console.log(mentor)
    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            { mentor &&
                <div className="flex-1 h-screen ml-60 mt-5">
                    <button onClick={openModal} className="btn my-3">Edit Profile</button>
                    <div className="mt-20 bg-white rounded-lg w-7/12 p-3 shadow-lg">
                        <div className="flex space-x-5">
                            <div className="image h-32 w-32">
                                <img
                                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                    alt="" />

                            </div>
                            <div>
                                <div className="grid grid-cols-2 space-x-7">
                                    <div class="flex">
                                        <div class="py-2 font-semibold ">Email :</div>
                                        <div class="py-2 px-3">{mentor.email}</div>
                                    </div>
                                    <div class="flex">
                                        <div class="py-2 font-semibold ">Email :</div>
                                        <div class="py-2 px-3">{mentor.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

/*
    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            { mentor &&
                <div className="flex-1 h-screen ml-60 mt-5">
                    <button onClick={openModal} className="btn my-3">Edit Profile</button>
                    <div className="mt-20">

                        <div>{mentor.uid}</div>
                        <div>{mentor.email}</div>
                    </div>
                </div>
            }
            <div>
                <EditProfile isOpen={showModal}
                    onRequestClose={closeModal} />
            </div>
        </div>
    );
*/