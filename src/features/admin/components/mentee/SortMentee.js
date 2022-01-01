import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { menteeSortFlow } from "../../middleware/menteeSlice"


const SortMentee = () => {
    const [isSort, setIsSort] = useState(false)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        console.log("click on sort icon")
        dispatch(menteeSortFlow(isSort))
        setIsSort(!isSort)
    }

    const getMyComponent = () => {
        if (isSort) {
            return (
                <div onClick={handleClick}>
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                </div>
            )
        }
        else {
            return (
                <div onClick={handleClick}>
                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                    </svg>
                </div>
            )
        }
    }

    return (
        <div className="flex mt-2 pl-5 space-x-4">
            <h1 className="block text-gray-700 text-md font-bold">
                Sort
            </h1>
            <div className="mt-1">
            {getMyComponent()}
            </div>
        </div>
    )
}

export default SortMentee;