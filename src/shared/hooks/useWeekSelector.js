import { useState, useEffect } from 'react';

const weekData = [
     "Week2",
     "Week3",
     "Week4",
     "Week5",
     "Week6",
     "Week7",
     "Week8",
]

const useWeekSelector = () => {
    
    const [ weekOptions, setWeekOptions] = useState([]);
    const [ week, setWeeks] = useState(null)

    useEffect(() => {
        renderAllWeeks();
    }, [])

    const handleChangeWeek = selectedOption => {
        setWeeks(selectedOption)
    };

    const renderAllWeeks = async () => {
        const mapData = weekData.map(ele => {
            return { value: ele, label: ele }
        })
        setWeekOptions(mapData)
    }
    return { week, handleChangeWeek, weekOptions }
}

export default useWeekSelector;