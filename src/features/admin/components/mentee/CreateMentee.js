import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { batch, useDispatch, useSelector } from 'react-redux'
import Select from "react-select"

import useInputFormField from 'shared/hooks/useInputFormField';
import { signUpSelector, createUserWithEmailPasswordLoadFlow } from 'features/auth/middleware/signUpSlice'
import { menteeLoadFlow } from "../../middleware/menteeSlice";
import { apiGetAllBatches, apiGetAllTeams } from "../../api/api"

ReactModal.setAppElement('#root');

const CreateMentee = (props) => {
    const dispatch = useDispatch()
    const { authError } = useSelector(signUpSelector)
    const email = useInputFormField()
    const name = useInputFormField()

    const [batcheOptions, setBatcheOptions] = useState([]);
    const [batche, setBatches] = useState(null)

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
        const mapData = data.map(ele => {
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
                batch: batch,
                team: team,
            }
        }))
        dispatch(menteeLoadFlow())
    }
    return (
        <div >
            <ReactModal isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
            >
                <button onClick={props.onRequestClose}>close</button>
                <div className="container">
                    <form className="white" onSubmit={handleSubmit} >
                        <h5 className="grey-text text-darken-3">Add Mentee</h5>
                        <label>Select Batch</label>
                        <Select
                            className="selet-width-custom"
                            value={batche}
                            onChange={handleChangeBatches}
                            options={batcheOptions}
                            isMulti={false}
                        />
                        <label>Select Team</label>
                        <Select
                            className="selet-width-custom"
                            value={team}
                            onChange={handleChangeTeam}
                            options={teamOptions}
                            isMulti={false}
                        />
                        <br></br>
                        <div className="input-field">
                            <input
                                className=""
                                name="Name"
                                type="text"
                                value={name.value}
                                onChange={name.onChange}
                                required
                            />
                            <label htmlFor="title">Name</label>
                        </div>
                        <div className="input-field">
                            <input
                                className=""
                                name="Email"
                                type="text"
                                value={email.value}
                                onChange={email.onChange}
                                required
                            />
                            <label htmlFor="title">Email</label>
                        </div>

                        <div className="input-field">
                            <button className="btn blue lighten-2">Submit</button>
                        </div>
                    </form>
                </div>
            </ReactModal>
        </div>
    );
}

export default CreateMentee;