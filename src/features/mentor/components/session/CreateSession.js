import React from 'react';
import ReactModal from 'react-modal';
import Select from "react-select"

import useInputFormField from 'shared/hooks/useInputFormField';
import useBatchSelector from "shared/hooks/useBatchSelector";
import useTeamSelector from "shared/hooks/useTeamSelector";
import useWeekSelector from "shared/hooks/useWeekSelector";
import useSessionSelector from "shared/hooks/useSessionSelector"
import { apiCreateSession } from "../../api/api"

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

const CreateSession = (props) => {
    const startdate = useInputFormField();
    const duration = useInputFormField();
    const ajanda = useInputFormField();
    const { batch, handleChangeBatches, batcheOptions } = useBatchSelector();
    const { team, handleChangeTeam, teamOptions } = useTeamSelector();
    const { week, handleChangeWeek, weekOptions } = useWeekSelector();
    const { session, handleChangeSession, sessionOptions } = useSessionSelector();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const sessionData = {
            mentorid: "",
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
        console.log(sessionData)
        // await CreateSession(sessionData);
        props.onRequestClose();
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
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Select Batch</label>
                            <Select
                                className=""
                                value={week}
                                onChange={handleChangeWeek}
                                options={weekOptions}
                                isMulti={false}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Select Batch</label>
                            <Select
                                className=""
                                value={session}
                                onChange={handleChangeSession}
                                options={sessionOptions}
                                isMulti={false}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Select Batch</label>
                            <Select
                                className=""
                                value={batch}
                                onChange={handleChangeBatches}
                                options={batcheOptions}
                                isMulti={false}
                            />
                        </div>
                        <div class="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1">Select Team</label>
                            <Select
                                className=""
                                value={team}
                                onChange={handleChangeTeam}
                                options={teamOptions}
                                isMulti={false}
                            />
                        </div>
                        <div className="mb-2 flex space-x-3">
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

export default CreateSession;