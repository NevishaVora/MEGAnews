import React from 'react';
import Navbar from '../Navbar/Index';
import NavSecondSec from './NavSecondSec/Index';
import LatestPostSec from './LatestPostSec/Index';
import Footer from '../Footer/Index'

const Writer = () => {
    return (
        <div>
            <Navbar/>
            <NavSecondSec/>
            <LatestPostSec/>
            <Footer/>
        </div>
    );
}

export default Writer;