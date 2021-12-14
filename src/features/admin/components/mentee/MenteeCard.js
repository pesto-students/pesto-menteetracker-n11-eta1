import React from 'react';

import developerIcon from 'assets/developer.png';

const MenteeCard = ({ mentee }) => {
    return (
        <div>
            <div className="card flex ">
                <img src={developerIcon} alt="developer" class="w-32 h-32 object-cover p-3" />
                <div className="flex flex-col  p-10">
                    <div>{mentee.email} </div>
                    <div>{mentee.batch} </div>
                    <div>{mentee.team} </div>
                </div>
            </div>

        </div>
    );
}

export default MenteeCard;