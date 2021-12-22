import { useState, useEffect } from 'react';

import {apiGetAllBatches} from "features/admin/api/api"

const useBatchSelector = () => {
    
    const [batcheOptions, setBatcheOptions] = useState([]);
    const [batch, setBatches] = useState(null)

    useEffect(() => {
        renderAllBatches()
    }, [])

    const handleChangeBatches = selectedOption => {
        setBatches(selectedOption)
    };

    const renderAllBatches = async () => {
        const data = await apiGetAllBatches()
        const mapData = data.map(ele => {
            return { value: ele.name, label: ele.name }
        })
        setBatcheOptions(mapData)
    }

    return { batch, handleChangeBatches, batcheOptions }
}

export default useBatchSelector;