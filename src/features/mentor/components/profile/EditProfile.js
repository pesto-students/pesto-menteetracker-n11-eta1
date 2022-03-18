import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useInputFormField from 'shared/hooks/useInputFormField';
import { apiUpdateProfile } from "../../api/api";
import { mentorProfileSelector, mentorProfileLoadFlow } from "../../middleware/mentorProfileSlice"

ReactModal.setAppElement('#root');

const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "400px",
        height: "500px"
    },
};

const EditProfile = (props) => {
    const { loading, error, mentor } = useSelector(mentorProfileSelector);
    const dispatch = useDispatch();
    const email = useInputFormField();

    useEffect(async () => {
        if (mentor) {
            email.initialValue(mentor.email)
        }
    }, [mentor?.uid])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = JSON.parse(window.localStorage.getItem('user'))
        const mentorData = {
            uid: user.uid,
            email: email.value,
        }
        const resp = await apiUpdateProfile(mentorData, mentor._id);
        if (resp.status == 200) {
            toast.success("Successfully edited mentor")
        } else {
            toast.warning("Failed to edit mentor")
        }
        props.onRequestClose();
        dispatch(mentorProfileLoadFlow())
    }
    return (
        <div  >
            <ReactModal isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                style={customStyles}
            >
                <div className="flex justify-between">
                    <h1 className="font-bold text-green-500">Create Session</h1>
                    <button className="text-2xl font-bold text-red-500" onClick={props.onRequestClose}>X</button>
                </div>
                <div className="bg-white">
                    <form onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Email</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                type="text"
                                value={email.value}
                                onChange={email.onChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </ReactModal>
            <ToastContainer />
        </div>
    );
}

export default EditProfile;