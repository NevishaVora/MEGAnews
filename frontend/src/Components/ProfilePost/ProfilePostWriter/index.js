import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const ProfilePostWriter = () => {

    const navigate = useNavigate();
    const handleWriterClick = () => {
        navigate('/Writer')
    }
    const handleMarkedPost = () => {
        navigate('/Profile')
    }
    const handlesendPost = () => {
        navigate('/ProfileSendPost')
    }
    const handlepostClick = () => {
        navigate('/ProfilePost')
    }
    const handleEditProfile = () => {
        navigate('/EditProfile')
    }
    const handlesavePost = () => {
        navigate('/SavePost')
    }
    return (
        <>
            <div className='max-w-[1320px] mx-auto p-4 mt-[-10px]'>
                <div className='flex'>
                    <ul className='flex gap-2'>
                        <li>Home <ArrowForwardIosIcon className='!h-[12px] !w-[12px]' /></li>
                        <li className='text-gray-500'>Profile Posts </li>
                    </ul>
                </div>
                <div className='bg-gray-100 rounded-md p-2 mt-6'>
                    <img src='/IMAGES/Writerimg.png' className='rounded-md'></img>
                    <div className='flex items-center justify-between'>

                        {/* ✅ Left Side: Writer Info */}
                        <div className='flex items-center gap-2 mt-6'>
                            <img src='/IMAGES/Louis Host.png' className='rounded-md cursor-pointer' onClick={() => handleWriterClick()}></img>
                            <h2 className='text-lg font-semibold'>Louis Hoebregts</h2>
                        </div>

                        {/* ✅ Center: Navigation Tabs */}
                        <div className='flex gap-6 font-medium flex-1 justify-center mt-6'>
                            <div onClick={() => handlepostClick()} className='cursor-pointer text-center'>
                                Posts
                                <div className='bg-red-600 w-[10px] h-[4px] rounded-lg'></div>
                            </div>
                            <div onClick={() => handlesendPost()} className='cursor-pointer text-center'>Send Post</div>
                            <div onClick={() => handlesavePost()} className='cursor-pointer text-center'>Save Post</div>
                        </div>

                        {/* ✅ Right Side: Blank Space */}
                        <div className="w-[50px]"></div>

                    </div>
                </div>

            </div>
        </>
    );
}
export default ProfilePostWriter;