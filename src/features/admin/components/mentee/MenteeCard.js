import React from 'react';

import developerIcon from 'assets/developer.png';

const MenteeCard = ({ mentee }) => {
    return (
        <div>
            <div className="card flex w-80">
                <img src={developerIcon} alt="developer" class="w-28 h-28 object-cover p-3" />
                <div className="flex flex-col  p-5">
                    <div className="font-bold-400 text-lg">{mentee.email} </div>
                    <div className="font-bold text-md text-pink-700 uppercase">{mentee.batch} </div>
                    <div className="font-bold text-md text-green-600 uppercase">{mentee.team} </div>
                </div>
            </div>

        </div>
    );
}

export default MenteeCard;