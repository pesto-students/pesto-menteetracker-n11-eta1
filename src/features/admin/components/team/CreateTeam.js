import React, { useState } from 'react';
import ReactModal from "react-modal"

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

const CreateTeam = (props) => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <ReactModal isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                style={reactModalCustomStyles}
            >
                Create Team
            </ReactModal>

        </div>
    )
}

export default CreateTeam;