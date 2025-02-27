import React from 'react';
import Navbar from '../Navbar/Index';
import NavHomeSection from './NavHomeSection/Index';
import Sport from './Sport/Index';
import Footer from '../Footer/Index'


const CategoriesSection = ()=> {
    return (
        <div>
            <Navbar/>
            <NavHomeSection/>
            <Sport/>
            <Footer/>
        </div>
    );
}

export default CategoriesSection;