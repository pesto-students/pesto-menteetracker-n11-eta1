import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { apiGetSession } from "../../api/api";
import SideNavBar from "../side-nav-bar/SideNavBar"

const SingleSessionView = () => {
    const { id } = useParams();
    const [sessionData, setSessionData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const resp = await apiGetSession(id);
            setSessionData(resp)
        }

        fetchData();
    }, [id])

    const getDetails = () => {
        if (sessionData) {
            return (
                <div className="bg-white rounded-lg pl-7 pt-3 pb-3 w-8/12">
                    <div className="text-2xl text-green-500 font-bold mb-4">Session details</div>
                    <div className="flex space-x-4  text-1xl">
                        <h1 className="font-bold ">Batch :</h1>
                        <h1 className="font-bold text-indigo-700 uppercase">{sessionData.batch}</h1>
                    </div>
                    <div className="flex space-x-4  text-1xl">
                        <h1 className="font-bold ">Team :</h1>
                        <h1 className="font-bold text-indigo-700 uppercase">{sessionData.team}</h1>
                    </div>
                    <div className="flex space-x-4  text-1xl">
                        <h1 className="font-bold ">Week :</h1>
                        <h1 className="font-bold text-indigo-700 capitalize">{sessionData.week}</h1>
                    </div>
                    <div className="flex space-x-4  text-1xl">
                        <h1 className="font-bold ">Session :</h1>
                        <h1 className="font-bold text-indigo-700 capitalize">{sessionData.session}</h1>
                    </div>
                    <div className="flex space-x-4  text-1xl">
                        <h1 className="font-bold ">Duration :</h1>
                        <h1 className="font-bold text-indigo-700 capitalize">
                            {sessionData.duration}:00  <span className="ml-2">(Minutes)</span>
                        </h1>
                    </div>
                    <div className="flex space-x-4  text-1xl">
                        <h1 className="font-bold ">Ajanda :</h1>
                        <h1 className="font-bold text-indigo-700 capitalize">{sessionData.ajanda}</h1>
                    </div>
                    <div className="flex space-x-4  text-1xl">
                        <h1 className="font-bold ">Notes :</h1>
                        <div className="font-bold text-indigo-700 capitalize">{sessionData.notes}</div>
                    </div>
                    <div className="flex space-x-4  text-1xl">
                        <h1 className="font-bold ">Feedback :</h1>
                        <h1 className="font-bold text-indigo-700 capitalize">{sessionData.feedback}</h1>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="flex bg-gray-100">
            <SideNavBar />
            <div className="flex-1 h-screen mx-60 mt-20">
                {getDetails()}
            </div>
        </div>
    )
}

export default SingleSessionView;