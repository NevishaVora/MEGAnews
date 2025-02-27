import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const ProfileMarked = () => {
    const navigate = useNavigate();

    const handleWriterClick = () => {
        navigate('/Writer');
    };

    const handleMarkedPost = () => {
        navigate('/Profile');
    };

    const handlesendPost = () => {
        navigate('/ProfileSendPost');
    };

    const handlepostClick = () => {
        navigate('/ProfilePost/:userId');
    };
    const handleEditProfile = () =>{
        navigate('/EditProfile')
    }

    return (
        <div className='max-w-[1320px] mx-auto p-4 mt-[-10px]'>
            <div className='flex'>
                <ul className='flex gap-2'>
                    <li>Home <ArrowForwardIosIcon className='!h-[12px] !w-[12px]' /></li>
                    <li className='text-gray-500'>Profile Marked </li>
                </ul>
            </div>
            <div className='bg-gray-200 rounded-md p-2 mt-6'>
                <img src='/IMAGES/Writerimg.png' className='rounded-md' />
                <div className='flex justify-between'>
                    <div className='mt-5 flex gap-2'>
                        <img src='/IMAGES/Louis Host.png' className='rounded-md' onClick={handleWriterClick} />
                        <h2 className='mt-7'>Louis Hoebregts</h2>
                    </div>
                    <div className='flex mt-12 gap-4 font-medium'>
                        {/* <div onClick={()=>handleMarkedPost()} className='cursor-pointer'>
                            Marked <div className='bg-red-600 w-[10px] h-[4px] rounded-lg'></div>
                        </div> */}
                        <div onClick={()=>handlepostClick()} className='cursor-pointer'>
                            Posts<div className='bg-red-600 w-[10px] h-[4px] rounded-lg'></div>
                        </div>
                        <div onClick={()=>handlesendPost()} className='cursor-pointer'>
                            Send Post
                        </div>
                       
                    </div>
                    <div className='rounded-xl p-2 my-8 text-center border border-gray-300 '>
                        <div className='flex gap-2'>
                            <img src='/IMAGES/EditProfile.png' className='h-[17px] w-[17px] mt-[3px]' />
                            <span className='text-pink-600 text-[15px] cursor-pointer' onClick={handleEditProfile}>Edit Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileMarked;
