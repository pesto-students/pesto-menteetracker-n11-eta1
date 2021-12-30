import React from 'react';
import { Link } from "react-router-dom"

const AppNavBar = () => {
    return (
        <div className="flex bg-gray-100">
            <div>
                <ul className="flex py-5">
                    <h3 className="text-2xl px-10">Pesto Mentee Tracker</h3>
                    <li className="mr-6 pl-10 text-lg">
                        <Link to="/"> <div className="text-blue-500 hover:text-blue-800">Home</div></Link>
                    </li>
                    <li className="mr-6 text-lg">
                        <Link to="/signin"> <div className="text-blue-500 hover:text-blue-800">SignIn</div></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AppNavBar;