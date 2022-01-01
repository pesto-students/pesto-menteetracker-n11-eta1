import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { batchSelector, batchLoadFlow } from "features/admin/middleware/batchSlice";

const useBatchSelector = () => {
    const dispatch = useDispatch()
    const { loading, error, batchList } = useSelector(batchSelector);
    const [batch, setBatches] = useState(null)

    useEffect(() => {
        dispatch(batchLoadFlow());
    }, [])

    const handleChangeBatches = selectedOption => {
        setBatches(selectedOption)
    };

    const batcheOptions = batchList.map(ele => {
        return { value: ele.name, label: ele.name }
    })

    return { batch, handleChangeBatches, batcheOptions }
}

export default useBatchSelector;