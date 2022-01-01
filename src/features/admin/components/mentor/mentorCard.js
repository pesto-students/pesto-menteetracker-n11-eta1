import React from 'react';

import mentorIcon from 'assets/training.png';

const MentorCard = ({ mentor }) => {
    return (
        <div className="card flex h-32 ">
            <img src={mentorIcon} alt="mentor" class="w-24 h-24 object-cover p-3" />
            <div className="flex flex-col  px-3 py-10">
                <div className="mr-3">{mentor.email} </div>
            </div>
        </div>
    );
}

export default MentorCard;