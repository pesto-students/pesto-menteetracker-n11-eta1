import React, { useState } from 'react';

import NavBar from "./NavBar"

const SideNavBar = () => {
    const [width, setWidth] = useState('0%')

    const openSidenav = () => {
        setWidth('25%')
    }

    const closeSidenav = () => {
        setWidth('0%')
    }

    return (
        <div>
            <button onClick={openSidenav}>Open</button>
            <div className="btn">
                Hi jay
            </div>
            <NavBar width={width} closeNav={closeSidenav} />
        </div>
    );
}

export default SideNavBar;