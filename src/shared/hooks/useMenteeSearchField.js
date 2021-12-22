import { useState } from 'react';
import { useDispatch } from "react-redux"

import { menteeSearchFlow, menteeLoadFlow } from "features/admin/middleware/menteeSlice"

const useMenteeSearchField = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const onChange = (e) => {
        const value = e.target.value
        setValue(value)
        if (value !== "")
            dispatch(menteeSearchFlow(e.target.value))
        else
            dispatch(menteeLoadFlow())
    }

    return { value, onChange }
}

export default useMenteeSearchField;