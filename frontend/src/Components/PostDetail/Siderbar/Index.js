import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import TextsmsIcon from '@mui/icons-material/Textsms';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const handleWriterClick = () =>{
        navigate('/Writer');
    }
    return (
        <>
            <div>
                <div className='flex justify-between mt-5'>
                    <div className='bg-gray-200 p-1 rounded-lg flex gap-1 px-5'>
                        <SendIcon className='text-gray-500 !h-[15px] !w-[15px] mt-[4px]' />
                        <h3>Share</h3>
                    </div>
                    <div className='bg-gray-200 p-1 rounded-lg flex gap-1 px-5'>
                        <FolderOpenIcon className='text-gray-500 !h-[15px] !w-[15px] mt-[4px]' />
                        <h3>Marketing</h3>
                    </div>
                    <div className='bg-gray-200 p-1 rounded-lg flex gap-1 px-5'>
                        <TextsmsIcon className='text-gray-500 !h-[15px] !w-[15px] mt-[6px]' />
                        <h3>Comment</h3>
                    </div>
                </div>
                <div className='bg-gray-100 flex justify-between p-4 mt-[20px] rounded-md'>
                    <div className='flex gap-3'>
                        <div onClick={()=>handleWriterClick()}>
                            <img src='/IMAGES/Louis Host.png' className='!h-[80px] !w-[80px] rounded-md'></img>
                        </div>
                        <div>
                            <h1>Louis Hoebregts</h1>
                            <div className='rounded-xl p-2 mt-2 text-center' style={{ backgroundColor: 'rgba(248, 21, 57, 0.75)' }}>
                                <AddIcon className='text-white !h-[18px] !w-[18px] mt-[-3px] ' />
                                <span className='text-white text-[15px]' >Follow</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[14px] text-gray-600'>27 Post</h1>
                    </div>
                </div>
                <div className='bg-gray-100 p-3 rounded-md mt-[20px]'>
                    <div className="flex  ">
                        <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                        <span className="text-[20px] text-black mt-[-5px] ml-2">Tags</span>
                    </div>
                    <div className='mt-2'>
                        <ul className='flex justify-between'>
                            <li>Montenegro</li>
                            <li>Visit Croatia</li>
                            <li>Luxury Travel</li>
                            <li>Travel Log</li>
                        </ul>
                        <ul className='flex gap-4 mt-1'>
                            <li>Paradise Island</li>
                            <li>Travel Info</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-gray-100 p-3 rounded-md mt-[20px]'>
                    <div className="flex  ">
                        <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                        <span className="text-[20px] text-black mt-[-5px] ml-2">Top Post</span>
                    </div>
                    <div className='flex mt-[16px] justify-between gap-5'>
                        <div>
                            <img src='/IMAGES/redcar.png' className=' !w-[90px] rounded-md'></img>
                        </div>
                        <div>
                            <h1 className='text-[14px]'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h1>
                            <h1 className='text-[12px] text-gray-500'>Subhead</h1>
                        </div>
                    </div>
                    <div className='flex mt-[16px] justify-between gap-5'>
                        <div>
                            <img src='/IMAGES/Megical Island.png' className=' !w-[90px] rounded-md'></img>
                        </div>
                        <div>
                            <h1 className='text-[14px]'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h1>
                            <h1 className='text-[12px] text-gray-500'>Subhead</h1>
                        </div>
                    </div>
                    <div className='flex mt-[16px] justify-between gap-5'>
                        <div>
                            <img src='/IMAGES/Megical girl.png' className=' !w-[90px] rounded-md'></img>
                        </div>
                        <div>
                            <h1 className='text-[14px]'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h1>
                            <h1 className='text-[12px] text-gray-500'>Subhead</h1>
                        </div>
                    </div>
                    <div className='flex mt-[16px] justify-between gap-5'>
                        <div>
                            <img src='/IMAGES/Megical Dish.png' className=' !w-[90px] rounded-md'></img>
                        </div>
                        <div>
                            <h1 className='text-[14px]'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h1>
                            <h1 className='text-[12px] text-gray-500'>Subhead</h1>
                        </div>
                    </div>
                    <div className='flex mt-[16px] justify-between gap-5'>
                        <div>
                            <img src='/IMAGES/Climb girl.png' className=' !w-[90px] rounded-md'></img>
                        </div>
                        <div>
                            <h1 className='text-[14px]'>How to Spend the Perfect Day on Croatia’s Most Magical Island</h1>
                            <h1 className='text-[12px] text-gray-500'>Subhead</h1>
                        </div>
                    </div>
                </div>
                {/* <div className="mt-[16px] relative rounded-md">
                    <img src='/IMAGES/advertising1.png' className='w-full' alt="Advertising" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                        <span className="text-[20px] font-normal">Advertising<br/><span className='text-[16px]'>360px*180px</span></span>
                    </div>
                </div>
                <div className="mt-[16px] relative">
                    <img src='/IMAGES/advertising2.png' className='w-full rounded-md' alt="Advertising" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                        <span className="text-[20px] font-normal">Advertising<br/><span className='text-[16px]'>360px*180px</span></span>
                    </div>
                </div> */}

            </div>
        </>

    );
}

export default Sidebar;