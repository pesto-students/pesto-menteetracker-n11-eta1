import React from 'react';
import { Link } from "react-router-dom";

import mentorIcon from 'assets/mentor.png';

const LiMentor = () => {
    return (
        <li className="mt-3">
            <Link to="/admin/mentor">
                <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ml-5">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                        <div className="bx bx-home">
                            <img src={mentorIcon} alt="mentor" className="w-7 h-7" />
                        </div>
                    </span>
                    <span className="text-sm font-medium">Mentor</span>
                </div>
            </Link>
        </li>
    )
}

export default LiMentor;