import { useState, useEffect } from 'react';

const sessionData = [
    "Session1",
    "Session2",
    "Session3",
    "Session4",
    "Session5",
    "Session6",
    "Session7",
    "Session8",
]

const useSessionSelector = () => {

    const [sessionOptions, setSessionOptions] = useState([]);
    const [session, setSessions] = useState(null)

    useEffect(() => {
        renderAllSessions();
    }, [])

    const handleChangeSession = selectedOption => {
        setSessions(selectedOption)
    };

    const renderAllSessions = async () => {
        const mapData = sessionData.map(ele => {
            return { value: ele, label: ele }
        })
        setSessionOptions(mapData)
    }
    return { session, handleChangeSession, sessionOptions }
}

export default useSessionSelector;