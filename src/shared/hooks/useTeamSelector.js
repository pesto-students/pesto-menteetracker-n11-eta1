import { useState, useEffect } from 'react';

import { apiGetAlladminTeam } from "features/admin/api/api"

const useTeamSelector = () => {
    
    const [ teamOptions, setTeamOptions] = useState([]);
    const [ team, setTeams] = useState(null)

    useEffect(() => {
        renderAllTeams();
    }, [])

    const handleChangeTeam = selectedOption => {
        setTeams(selectedOption)
    };

    const renderAllTeams = async () => {
        const data = await apiGetAlladminTeam()
        const mapData = data.map(ele => {
            return { value: ele.name, label: ele.name }
        })
        setTeamOptions(mapData)
    }
    return { team, handleChangeTeam, teamOptions }
}

export default useTeamSelector;