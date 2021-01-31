import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardNavbar from '../DashboardNavbar';
import InfoSearch from '../InfoSearch';
import Feature from '../Feature';


function Dashboard() {
    return (
        <>
            <DashboardNavbar />
            <InfoSearch />
            <Feature />
        </>
    )
}

export default Dashboard;