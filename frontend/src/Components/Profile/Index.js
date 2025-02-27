import React from 'react';
import Navbar from '../Navbar/Index';
import ProfileMarked from './ProfileMarked/Index';
import ProfileCards from './ProfileCards/Index';
import Footer from '../Footer/Index';


const Profile = () =>{
    return (
        <>
            <Navbar/>
            <ProfileMarked/>
            <ProfileCards/>
            <Footer/>
        </>
    );
}

export default Profile;