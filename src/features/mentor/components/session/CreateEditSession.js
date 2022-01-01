import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import Select from "react-select";
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useInputFormField from 'shared/hooks/useInputFormField';
import useBatchSelector from "shared/hooks/useBatchSelector";
import useTeamSelector from "shared/hooks/useTeamSelector";
import useWeekSelector from "shared/hooks/useWeekSelector";
import useSessionSelector from "shared/hooks/useSessionSelector"
import { mentorSessionLoadFlow } from "../../middleware/mentorSessionSlice";
import { apiGetSession, apiEditSession, apiCreateSession } from "../../api/api";
import CloseIcon from "shared/components/close/CloseIcon";

ReactModal.setAppElement('#root');

const customStyles = {
    content: {
        top: '45%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "400px",
        height: "540px"
    },
};

const CreateEditSession = (props) => {
    const dispatch = useDispatch()
    const startdate = useInputFormField();
    const duration = useInputFormField();
    var ajanda = useInputFormField();
    var { batch, handleChangeBatches, batcheOptions } = useBatchSelector();
    const { team, handleChangeTeam, teamOptions } = useTeamSelector();
    const { week, handleChangeWeek, weekOptions } = useWeekSelector();
    const { session, handleChangeSession, sessionOptions } = useSessionSelector();

    useEffect(async () => {
        if (props.isEdit) {
            const session = await apiGetSession(props.id);
            handleChangeBatches({ value: session.batch, label: session.batch })
            handleChangeTeam({ value: session.team, label: session.team })
            handleChangeWeek({ value: session.week, label: session.week })
            handleChangeSession({ value: session.session, label: session.session })
            ajanda.initialValue(session.ajanda)
            startdate.initialValue(session.datetime)
            duration.initialValue(session.duration)
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = JSON.parse(window.localStorage.getItem('user'))
        const sessionData = {
            mentorid: user.uid,
            week: week.value,
            session: session.value,
            batch: batch.value,
            team: team.value,
            datetime: startdate.value,
            duration: duration.value,
            ajanda: ajanda.value,
            notes: "",
            feedback: ""
        }
        var resp;
        if (props.isEdit)
            resp = await apiEditSession(sessionData, props.id);
        else
            resp = await apiCreateSession(sessionData);
        if (resp.status == 200) {
            console.log("props.isEdit : ", props.isEdit)
            if (props.isEdit) {
                toast.success("Successfully edited session")
            }
            else
                toast.success("Successfully created session")
        } else {
            if (props.isEdit)
                toast.warning("Failed to edit session")
            else
                toast.warning("Failed to create session")
        }
        props.onRequestClose();
        dispatch(mentorSessionLoadFlow())
    }
    return (
        <div  >
            <ReactModal isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                style={customStyles}
            >
                <div className="flex justify-between">
                    <h1 className="font-bold text-green-500">Create Session</h1>
                    <CloseIcon handleClick={props.onRequestClose} />
                </div>
                <div className="bg-white">
                    <form onSubmit={handleSubmit} >
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
                            <label className="block text-gray-700 text-sm font-bold mb-1">Select Team</label>
                            <Select
                                className=""
                                value={team}
                                onChange={handleChangeTeam}
                                options={teamOptions}
                                isMulti={false}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Select Week</label>
                            <Select
                                className=""
                                value={week}
                                onChange={handleChangeWeek}
                                options={weekOptions}
                                isMulti={false}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Select Session</label>
                            <Select
                                className=""
                                value={session}
                                onChange={handleChangeSession}
                                options={sessionOptions}
                                isMulti={false}
                            />
                        </div>
                        <div className="mb-3 flex space-x-3">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Start Date</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="startdate"
                                    type="text"
                                    value={startdate.value}
                                    onChange={startdate.onChange}
                                    placeholder="DD/MM/YY"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Duration (Minutes)</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="duration"
                                    type="text"
                                    value={duration.value}
                                    onChange={duration.onChange}
                                    placeholder="30:00"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Ajanda</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="ajanda"
                                type="text"
                                value={ajanda.value}
                                onChange={ajanda.onChange}
                                placeholder="Ajanda Of Meet"
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

export default CreateEditSession;