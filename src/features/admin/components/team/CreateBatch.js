import React, { useState } from 'react';
import ReactModal from "react-modal"
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useInputFormField from 'shared/hooks/useInputFormField';
import { apiCreateBatch } from "../../api/api";
import CloseIcon from "shared/components/close/CloseIcon";

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
    const batchname = useInputFormField()
    const startdate = useInputFormField()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await apiCreateBatch({
            startdate: startdate.value,
            name: batchname.value,
        })
        console.log(resp.status)
        if (resp.status == 200){
            toast.success("Successfully created batch")
        }else{
            toast.warning("Failed to create batch")
        }
        props.onRequestClose();
    }

    return (
        <div>
            <ReactModal isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                style={reactModalCustomStyles}
            >
                <div className="">
                    <div className="flex justify-between mb-3">
                        <h1 className="font-bold text-green-500">Create Batch</h1>
                        <CloseIcon handleClick={props.onRequestClose} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Start Date</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="sdate"
                                type="text"
                                value={startdate.value}
                                onChange={startdate.onChange}
                                placeholder="dd/mm/yy"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="title">Batch Name</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="bname"
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
            <ToastContainer />
        </div>
    )
}

export default CreateBatch;