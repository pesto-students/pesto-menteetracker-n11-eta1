import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { apiGetSession } from "../../api/api";

const SingleSessionView = () => {
    const { id } = useParams();
    console.log(id)
    const [sessionData, setSessionData] = useState(null)

    useEffect(async () => {
        const resp = await apiGetSession(id);
        console.log(resp)
        setSessionData(resp)
    }, [id])

    const getDetails = () => {
        if (sessionData) {
            return (
                <div>
                    {sessionData.team}
                </div>
            )
        }
    }

    return (
        <div>
            {getDetails()}
        </div>
    )
}

export default SingleSessionView;