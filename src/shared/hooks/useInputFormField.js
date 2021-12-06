import { useState } from 'react';

const useInputFormField = () => {
    const [value, setValue] = useState('')
    const onChange = (e) => {
        setValue(e.target.value)
    }

    return { value, onChange }
}

export default useInputFormField;