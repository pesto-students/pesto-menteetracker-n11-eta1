import { useState, useEffect } from 'react';

import {apiGetAllmentor} from "features/admin/api/api"

const useMentorSelector = () => {
    
    const [mentorOptions, setMentorOptions] = useState([]);
    const [mentor, setMentors] = useState(null)

    useEffect(() => {
        renderAllMentors();
    }, [])

    const handleChangeMentor = selectedOption => {
        setMentors(selectedOption)
    };

    const renderAllMentors = async () => {
        const data = await apiGetAllmentor()
        const mapData = data.map(ele => {
            return { value: ele.email, label: ele.email }
        })
        setMentorOptions(mapData)
    }
    return { mentor, handleChangeMentor, mentorOptions }
}

export default useMentorSelector;