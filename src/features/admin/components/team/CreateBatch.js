import React, { useState } from 'react';
import ReactModal from "react-modal"

import useInputFormField from 'shared/hooks/useInputFormField';

const reactModalCustomStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "400px",
    },
};

const CreateBatch = (props) => {
    const [showModal, setShowModal] = useState(false)
    const batchname = useInputFormField()

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(createBatchFlow({
            batch: batchname.value,
        }))
        props.onRequestClose();
    }

    return (
        <div>
            <ReactModal isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                style={reactModalCustomStyles}
            >
                <div className="">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-green-500">Create Batch</h1>
                        <button className="text-2xl font-bold text-red-500" onClick={props.onRequestClose}>X</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Batch Name</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="mname"
                                type="text"
                                value={batchname.value}
                                onChange={batchname.onChange}
                                placeholder="Batch Name"
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </ReactModal>

        </div>
    )
}

export default CreateBatch;