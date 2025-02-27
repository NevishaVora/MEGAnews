import React from 'react';
import Navbar from '../Navbar/Index';
import ProfilePostWriter from './ProfilePostWriter';
import ProfilePostView from './ProfilePostView';
import ProfileYourPost from './ProfileYourPost';
import Footer from '../Footer/Index';


const ProfilePost = () => {
    
    return (
        <>
            <Navbar />
            <ProfilePostWriter/>
            {/* <ProfilePostView/> */}
            <ProfileYourPost/>
            <Footer/>
            
        </>
    );
}

export default ProfilePost;