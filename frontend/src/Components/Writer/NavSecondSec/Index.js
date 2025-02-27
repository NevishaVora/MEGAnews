import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
const NavSecondSec = () => {
    const navigate = useNavigate();
    const handleWriterClick = () =>{
        navigate('/Writer');
    }
    return (
        <>
            <div className='max-w-[1320px] mx-auto p-4 mt-[-10px]'>
                <div className='flex'>
                    <ul className='flex gap-2'>
                        <li>Home <ArrowForwardIosIcon className='!h-[12px] !w-[12px]' /></li>
                        <li className='text-gray-500'>Writer </li>
                    </ul>
                </div>
                <div className='bg-gray-100 rounded-md p-2 mt-6'>
                    <img src='/IMAGES/Writerimg.png' className='rounded-md'></img>
                    <div className='flex justify-between'>
                        <div className='mt-5 flex gap-2'>
                            <img src='/IMAGES/Louis Host.png' className='rounded-md' onClick={()=>handleWriterClick}></img>
                            <h2 className='mt-7'>Louis Hoebregts</h2>
                        </div>
                        <div className='flex mt-12 gap-4 text-gray-600'>
                            <div><StarOutlineIcon />Rate : 4.2</div>
                            <div><PersonOutlineIcon />Follower : 1.2 k</div>
                            <div><PostAddIcon />Post : 29 </div>
                        </div>
                        <div className='rounded-xl p-2 my-8 text-center ' style={{ backgroundColor: 'rgba(248, 21, 57, 0.75)' }}>
                            <AddIcon className='text-white !h-[18px] !w-[18px] mt-[-3px] ' />
                            <span className='text-white text-[15px]' >Follow</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavSecondSec;