import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux'

import useInputFormField from 'shared/hooks/useInputFormField';
import { signUpSelector, createUserWithEmailPasswordLoadFlow } from 'features/auth/middleware/signUpSlice'
import CloseIcon from "shared/components/close/CloseIcon";

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
    },
};

const CreateMentor= (props) => {
    const dispatch = useDispatch()
    const { authError } = useSelector(signUpSelector)
    const email = useInputFormField()
    const name = useInputFormField()

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(createUserWithEmailPasswordLoadFlow({
            email: email.value,
            name: name.value,
            isMentee: false,
        }))
        props.onRequestClose();
    }
    return (
        <div  >
            <ReactModal isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                style={customStyles}
            >
                <div className="flex justify-between">
                    <h1 className="font-bold text-green-500">Create Mentor</h1>
                    <CloseIcon handleClick={props.onRequestClose} />
                </div>
                <div className="">
                    <form onSubmit={handleSubmit} >
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">MentorName</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="mname"
                                type="text"
                                value={name.value}
                                onChange={name.onChange}
                                placeholder="MentorName"
                                required
                            />
                        </div>
                        <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">MentorEmail</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="Email"
                                type="email"
                                value={email.value}
                                onChange={email.onChange}
                                placeholder="MentorEmail"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </ReactModal>
        </div>
    );
}

export default CreateMentor;