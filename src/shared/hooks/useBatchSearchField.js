import { useState } from 'react';
import { useDispatch } from "react-redux"

import { adminTeamLoadFlow, adminBatchSearchFlow } from "features/admin/middleware/adminTeamSlice"

const useBatchSearchField = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();

    const onChange = (e) => {
        const value = e.target.value
        setValue(value)
        if (value !== "")
            dispatch(adminBatchSearchFlow(e.target.value))
        else
            dispatch(adminTeamLoadFlow())
    }
    return { value, onChange }
}

export default useBatchSearchField;