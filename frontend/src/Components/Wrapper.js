import React from 'react';


import { Outlet } from 'react-router-dom';
import Dashboard from './Sidebar';
import Header from './Header';
import Sidebar from './Sidebar';

function Wrapper({ children }) {
    return (
        <div>
            <Sidebar/>
            <Header/>
            <div style={{marginLeft:'280px',padding:'20px'}}>{children}</div>
        </div>
    );
}

export default Wrapper;