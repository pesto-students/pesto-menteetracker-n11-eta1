import React from 'react';

import developerIcon from 'assets/developer.png';

const MentorCard = ({ mentor }) => {
    return (
        <div className="card flex h-32 ">
            <img src={developerIcon} alt="developer" class="w-32 h-32 object-cover p-3" />
            <div className="flex flex-col  px-3 py-10">
                <div>{mentor.email} </div>
            </div>
        </div>
    );
}

export default MentorCard;