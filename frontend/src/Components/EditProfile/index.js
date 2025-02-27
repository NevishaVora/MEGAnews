import React from 'react';
import Navbar from '../Navbar/Index';
import ProfileEditDetail from './ProfileEditDetail';
import Footer from '../Footer/Index';

const EditProfile = ()=> {
    return (
        <div>
            <Navbar/>
            <ProfileEditDetail/>
            <Footer/>
        </div>
    );
}

export default EditProfile;