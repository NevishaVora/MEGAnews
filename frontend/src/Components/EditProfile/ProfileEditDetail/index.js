import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const ProfileEditDetail = (props) => {
    return (
        <div>
            <div className='max-w-[1320px] mx-auto p-4 mt-[-10px]'>
                <div className='flex'>
                    <ul className='flex gap-2'>
                        <li>Home <ArrowForwardIosIcon className='!h-[12px] !w-[12px]' /></li>
                        <li className='text-gray-500'>Profile Edit </li>
                    </ul>
                </div>
                <div className='flex gap-6 mt-5'>
                    <div className='w-[33.33%]'>
                        <label for=''>First Name</label><br />
                        <input type='text' className='p-1 bg-gray-100 w-full mt-3 rounded-md' ></input>
                    </div>
                    <div className='w-[33.33%]'>
                        <label for=''>Last Name</label><br />
                        <input type='text' className='p-1 bg-gray-100 w-full mt-3 rounded-md'></input>
                    </div>
                    <div className='w-[33.33%]'>
                        <label for=''>User Name</label><br />
                        <input type='text' className='p-1 bg-gray-100 w-full mt-3 rounded-md' ></input>
                    </div>
                </div>
                <div className='flex gap-6 mt-5'>
                    <div className='w-[33.33%]'>
                        <label for=''>Old Password</label><br />
                        <input type='text' className='p-1 bg-gray-100 w-full mt-3 rounded-md'></input>
                    </div>
                    <div className='w-[33.33%]'>
                        <label for=''>Password</label><br />
                        <input type='text' className='p-1 bg-gray-100 w-full mt-3 rounded-md'></input>
                    </div>
                    <div className='w-[33.33%]'>
                        <label for=''>Email</label><br />
                        <input type='text' className='p-1 bg-gray-100 w-full mt-3 rounded-md' ></input>
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <label for=''>Add Banner</label><br />
                    {/* <input type='text' className='p-20 bg-gray-100 w-full mt-3 rounded-md'>
                        <div className='flex'>
                            <img src='IMAGES/Bannerimg.png'></img>
                        </div>
                    </input> */}
                    <div className="relative w-full mt-3">
                        {/* Input field */}
                        <input
                            type='text'
                            id="banner"
                            className='p-20 bg-gray-100 w-full mt-3 rounded-md text-center'
                        />

                        {/* Centered Image & Text in a Row */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 mt-2">
                            <img
                                src='IMAGES/Bannerimg.png'
                                alt="Banner Preview"
                                className="pointer-events-none w-25 h-20"
                            />
                            <span className="text-gray-500 text-md ">Drop image here, paste or
                                <div className='border border-gray-400 w-[100px] mt-[10px] text-center mx-auto py-2 rounded-lg'>
                                    <AddIcon className='text-gray-500 mt-[-2px]' />
                                    <span className='text-gray-500'>Select</span>
                                </div>
                            </span>
                        </div>

                        {/* Select Button */}

                    </div>

                </div>
                <div className='mt-3'>
                    <div>Explanation</div>
                    <div className='flex gap-4'>

                        <div className='w-[75%] bg-white shadow-md p-1 mt-[20px]'>
                            <div className='flex mt-[20px] gap-5 px-6'>
                                <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-image.png' className='h-[20px] w-[20px] mt-1' /><span className='text-gray-600'>Image</span></div>
                                <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-color.png' className='h-[15px] w-[15px] mt-[5px]' /><span className='text-gray-600'>Color</span></div>
                                <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-text.png' className='h-[18px] w-[18px] mt-1' /><span className='text-gray-600'>Text</span></div>
                                <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-align.png' className='h-[15px] w-[15px] mt-[5px]' /><span className='text-gray-600'>Align</span></div>
                                <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-Link.png' className='h-[20px] w-[20px] mt-1' /><span className='text-gray-600'>Link</span></div>
                            </div>
                            <div className='px-6'>
                                <input type='text' placeholder='Type...' className='bg-gray-100  pb-[180px] pt-1   rounded-md mt-7 w-[100%] mb-7 '></input></div>
                        </div>

                        <div className='w-[25%]'>
                            <div>Add File</div>
                            <div className='bg-gray-100 p-6 py-[75px] mt-[20px] rounded-lg' >
                                <img src='/IMAGES/Bannerimg.png' className=' h-[60px] w-[70px] mt-[-20px] mx-auto'></img>
                                <div className='text-center mt-[20px]'>Drop image here, paste or</div>
                                <div className='border border-gray-400 w-[100px] mt-[30px] text-center mx-auto py-2 rounded-lg'><AddIcon className='text-gray-500 mt-[-2px]' /><span className='text-gray-500'>Select</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='mt-3 flex gap-3 p-2 justify-end '>
                    <div className='flex items-center bg-pink-500 px-4 py-2 rounded-lg gap-2'>
                        <img src='/IMAGES/Contact-us-sendicon.png' alt="Send Icon" />
                        <div className='text-white'>Send</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileEditDetail;