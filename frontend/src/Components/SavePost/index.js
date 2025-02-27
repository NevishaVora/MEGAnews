import React from 'react';
import Navbar from '../Navbar/Index';
import ProfileSavePost from './ProfileSavePost';
import Footer from '../Footer/Index';
import GetSavePost from './GetSavePost';

const SavePost = (props)=> {
    return (
        <div>
            <Navbar/>
            <ProfileSavePost/>
            <GetSavePost/>
            <Footer/>
        </div>
    );
}

export default SavePost;