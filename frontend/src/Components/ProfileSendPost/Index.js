import React from 'react';
import Navbar from '../Navbar/Index';
import ProfileSend from './ProfileSend/Index';
import ProfileSendVideo from './ProfileSend/ProfileSendVideo/Index';
import Footer from '../Footer/Index';

const ProfileSendPost = ()=> {
    return (
        <>
          <Navbar/>
          <ProfileSend/>
          <ProfileSendVideo/>
          <Footer/>
        </>
    );
}

export default ProfileSendPost;