import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { batch, useDispatch, useSelector } from 'react-redux'
import Select from "react-select"

import useInputFormField from 'shared/hooks/useInputFormField';
import { signUpSelector, createUserWithEmailPasswordLoadFlow } from 'features/auth/middleware/signUpSlice'
import { apiGetAllBatches, apiGetAllTeams } from "../../api/api";
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

const CreateMentee = (props) => {
    const dispatch = useDispatch()
    const { authError } = useSelector(signUpSelector)
    const email = useInputFormField()
    const name = useInputFormField()

    const [batcheOptions, setBatcheOptions] = useState([]);
    const [batch, setBatches] = useState(null)

    const [teamOptions, setTeamOptions] = useState([]);
    const [team, setTeam] = useState(null)

    useEffect(() => {
        renderAllBatches()
        renderAllTeams()
    }, [])

    const handleChangeTeam = selectedOption => {
        setTeam(selectedOption)
    };

    const handleChangeBatches = selectedOption => {
        setBatches(selectedOption)
    };

    const renderAllTeams = async () => {
        const data = await apiGetAllTeams()
        const mapData = data.teams.map(ele => {
            return { value: ele.name, label: ele.name }
        })
        setTeamOptions(mapData)
    }

    const renderAllBatches = async () => {
        const data = await apiGetAllBatches()
        const mapData = data.map(ele => {
            return { value: ele.name, label: ele.name }
        })
        setBatcheOptions(mapData)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(createUserWithEmailPasswordLoadFlow({
            email: email.value,
            name: name.value,
            isMentee: true,
            dbinput: {
                batch: batch.value,
                team: team.value,
            }
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
                    <h1 className="font-bold text-green-500 mb-3">Create Mentee</h1>
                    <CloseIcon handleClick={props.onRequestClose} />
                </div>
                <div className="">
                    <form onSubmit={handleSubmit} >
                        <div class="mb-2">
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
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Mentee Name</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="mname"
                                type="text"
                                value={name.value}
                                onChange={name.onChange}
                                placeholder="Mentee Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Mentee Email</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="Email"
                                type="email"
                                value={email.value}
                                onChange={email.onChange}
                                placeholder="Mentee Email"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button className="btn text-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </ReactModal>
        </div>
    );
}

export default CreateMentee;