import React from 'react';
import { Link } from "react-router-dom";

const LiSession = () => {
    return (
        <li className="mt-3">
            <Link to="/mentor/session">
                <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ml-5">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                        <div className="bx bx-home">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </span>
                    <span className="text-sm font-medium hover:text-gray-900">
                        Sessions
                    </span>
                </div>
            </Link>
        </li>
    )
}

export default LiSession;