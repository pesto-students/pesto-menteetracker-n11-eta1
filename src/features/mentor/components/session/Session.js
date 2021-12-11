import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import SideNavBar from "../side-nav-bar/SideNavBar"


const MentorSession = () => {
    return (
        <div>
            <SideNavBar />
            Mentor Session
        </div>
    );
}

export default MentorSession;