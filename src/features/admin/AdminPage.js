import React, { useState} from 'react';

import SideNavBar from "./components/side-nav-bar/SideNavBar"

const AdminPage = () => {
    const [width, setWidth] = useState('0%')

    const openSidenav = ( ) => {
        setWidth('25%')
     }

     const closeSidenav = ( ) => {
        setWidth('0%')
     }

    return ( 
        <div>
            <button onClick={openSidenav}>Open</button>
            <SideNavBar  width={width} closeNav={closeSidenav}/>
        </div>
     );
}
 
export default AdminPage;