import React, { useState } from 'react';
import ReactModal from "react-modal";
import Select from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

import useBatchSelector from "shared/hooks/useBatchSelector";
import useInputFormField from 'shared/hooks/useInputFormField';
import useMentorSelector from "shared/hooks/useMentorSelector";
import useMenteeSelector from "shared/hooks/useMenteeSelector";
import { apiCreateTeam } from "../../api/api";
import { adminTeamLoadFlow } from "../../middleware/adminTeamSlice";
import CloseIcon from "shared/components/close/CloseIcon";


const reactModalCustomStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "400px",
        height: "480px"
    },
};

const CreateTeam = (props) => {
    const teamname = useInputFormField()
    const { batch, handleChangeBatches, batcheOptions } = useBatchSelector()
    const { mentor, handleChangeMentor, mentorOptions } = useMentorSelector()
    const { mentee, handleChangeMentees, menteeeOptions } = useMenteeSelector()
    const dispatch = useDispatch()
    const startdate = useInputFormField();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await apiCreateTeam({
            name: teamname.value,
            batch: batch.value,
            mentor: mentor.value,
            mentee: mentee.map(ele => ele.value)
        })
        console.log(resp.status)
        if (resp.status == 200) {
            toast.success("Successfully created batch")
        } else {
            toast.warning("Failed to create batch")
        }
        props.onRequestClose();
        dispatch(adminTeamLoadFlow())
    }

    return (
        <div>
            <ReactModal isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                style={reactModalCustomStyles}
            >
                <div className="">
                    <div className="flex justify-between mb-4">
                        <h1 className="font-bold text-green-500">Create Team</h1>
                        <CloseIcon handleClick={props.onRequestClose} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Start Date</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="sdate"
                                type="text"
                                value={startdate.value}
                                onChange={startdate.onChange}
                                placeholder="dd/mm/yy"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Team Name</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="tname"
                                type="text"
                                value={teamname.value}
                                onChange={teamname.onChange}
                                placeholder="Batch Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Select Batch</label>
                            <Select
                                className=""
                                value={batch}
                                onChange={handleChangeBatches}
                                options={batcheOptions}
                                isMulti={false}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Select Mentor</label>
                            <Select
                                className=""
                                value={mentor}
                                onChange={handleChangeMentor}
                                options={mentorOptions}
                                isMulti={false}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Select Mentee</label>
                            <Select
                                className=""
                                value={mentee}
                                onChange={handleChangeMentees}
                                options={menteeeOptions}
                                isMulti={true}
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
    )
}

export default CreateTeam;