import { useState, useEffect } from 'react';

import { apiGetAllmentee } from "features/admin/api/api"

const useMenteeSelector = () => {
    
    const [menteeeOptions, setMenteeeOptions] = useState([]);
    const [mentee, setMentees] = useState(null)

    useEffect(() => {
        renderAllMenteees()
    }, [])

    const handleChangeMentees = selectedOption => {
        setMentees(selectedOption)
    };
    
    const renderAllMenteees = async () => {
        const data = await apiGetAllmentee()
        const mapData = data.map(ele => {
            return { value: ele.email, label: ele.email }
        })
        setMenteeeOptions(mapData)
    }

    return { mentee, handleChangeMentees, menteeeOptions }
}

export default useMenteeSelector;