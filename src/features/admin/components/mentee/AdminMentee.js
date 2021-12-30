import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"
import Menteecard from "./MenteeCard"
import { menteeSelector, menteeLoadFlow, menteeFilterFlow } from "../../middleware/menteeSlice"
import CreateMentee from "./CreateMentee";
import useShowHideModal from "shared/hooks/useShowHideModal";
import useMenteeSearchField from 'shared/hooks/useMenteeSearchField';
import SortMentee from "./SortMentee"


const AdminMentee = () => {
    const dispatch = useDispatch()
    const { loading, error, menteeList, batcheList } = useSelector(menteeSelector)
    const { showModal, openModal, closeModal } = useShowHideModal()
    const searchedField = useMenteeSearchField()
    const [filter, setFilter] = useState("All")

    const batches = new Set();
    useEffect(() => {
        dispatch(menteeLoadFlow())
    }, [])

    const getFilter = () => {
        console.log(batcheList)
        const result = (
            <div className="flex space-x-3">
                <label>
                    Select Batch
                </label>
                <select value={filter} onChange={handleChangeFilter}>
                    <option value="All">All</option>
                    {menteeList?.map((mentee, index) => {
                        if (!batches.has(mentee.batch)) {
                            batches.add(mentee.batch)
                            return (
                                <option value={mentee.batch}>{mentee.batch}</option>
                            )
                        }
                    }
                    )}
                </select>
            </div>
        )
        return result;
    }
    const handleChangeFilter = (e) => {
        const value = e.target.value
        setFilter(value)
        dispatch(menteeFilterFlow(value))
    }

    // if (loading)
    //     return (<div>Loading</div>)
    // else
    return (
        <div className="bg-gray-100 flex">
            <SideNavBar />
            <main className="flex-1 h-screen">
                <div >
                    <div className="flex mx-5 my-3 space-x-10">
                        <button onClick={openModal} className="btn">Add Mentee</button>
                        <input
                            className="shadow appearance-none border h-8 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-48"
                            name="test"
                            type="text"
                            value={searchedField.value}
                            onChange={searchedField.onChange}
                            placeholder="search by email"
                            required
                        />
                        {getFilter()}
                        <SortMentee />
                    </div>
                    <div className="m-10 grid grid-cols-3 gap-7">
                        {menteeList?.map(mentee => {
                            return <Menteecard mentee={mentee} key={mentee._id} />
                        })}
                    </div>
                    <CreateMentee isOpen={showModal}
                        onRequestClose={closeModal} />
                </div>
            </main>
        </div>
    );
}

export default AdminMentee;