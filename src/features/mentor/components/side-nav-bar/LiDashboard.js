import React from 'react';
import { Link } from "react-router-dom";

const LiDashboard = () => {
    return (
        <li className="mt-3">
            <Link to="/mentor/dashboard">
                <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ml-5">
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home">
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </i></span>
                    <span className="text-sm font-medium">Dashboard</span>
                </div>
            </Link>
        </li>
    )
}

export default LiDashboard;