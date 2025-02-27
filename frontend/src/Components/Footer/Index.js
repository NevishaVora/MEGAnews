import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div>
            <div className='flex justify-between pt-5 mb-[30px]'>
                <div className='bg-gray-100 w-[50%] flex flex-col justify-between rounded-r-xl'>
                    <div className='flex'>
                        <div className='w-[50%] ml-[115px]'>
                            <div className="flex items-start mt-[30px]">
                                <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                                <span className="text-[20px] text-black mt-[-5px] ml-2">Mega News</span>
                            </div>
                            <p className='text-gray-600 text-[14px] text-justify  mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque.</p>
                            <div className="flex items-start mt-[30px]">
                                <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                                <span className="text-[20px] text-black mt-[-5px] ml-2">Newsletters</span>
                            </div>
                            <div className='flex justify-end'>
                                <input
                                    type='email'
                                    placeholder='Write your Email..'
                                    className='p-3 border rounded-lg mt-2 w-full' // Padding and border radius added

                                />
                                <EmailIcon className='text-gray-600 ml-[-30px] mt-[22px]' />
                            </div>

                        </div>


                        <div className='w-[50%] ml-[40px]'>
                            <div className="flex items-start mt-[30px]">
                                <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                                <span className="text-[20px] text-black mt-[-5px] ml-2">Categories</span>
                            </div>
                            <div className='mt-4'>
                                <ul className='ml-4 leading-loose text-[14px] text-gray-600'>
                                    <li>Culture</li>
                                    <li>Fashion</li>
                                    <li>Featured</li>
                                    <li>Food</li>
                                    <li>Healthy Leaving</li>
                                    <li>Technology</li>

                                </ul>
                            </div>
                            <div className="flex items-start mt-[30px]">
                                <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                                <span className="text-[20px] text-black mt-[-5px] ml-2">Social Network</span>
                            </div>
                            <div className='flex gap-6 mt-4'>
                                <div className='bg-gradient-to-r from-[rgba(244,92,159,1)] to-[rgba(255,117,99,1)] rounded-xl px-3 py-2 flex gap-2 text-white' >
                                    {/* <InstagramIcon className='text-[16px]' /> */}
                                    <img src='/IMAGES/instagram.png' className='w-[20px] '></img>
                                    <span>Instagram</span></div>
                                <div className=' p-2 rounded-lg ' style={{
                                    background: 'linear-gradient(90deg, rgba(44, 165, 224, 1), rgba(103, 201, 245, 1)) ',
                                }}><img src='/IMAGES/Twitter.png'></img></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-200 mt-8 p-1 rounded-r-xl w-[710px]' >
                        <div className='ml-[115px] flex justify-between '>
                            <h4 className='text-[12px] w-[50%]'>privacy policy | terms & conditions</h4>
                            <h4 className='text-[12px] w-[50%] ml-[80px]'>All Copyright (c) 2022 Reserved</h4>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] bg-white flex justify-between ml-4'>
                    <div className='w-[43%]'>
                        <div className="flex items-start mt-[30px]">
                            <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                            <span className="text-[20px] text-black mt-[-5px] ml-2">New Comments</span>
                        </div>
                        <div className='bg-gray-100 p-3 mt-4 rounded-lg'>
                            <h4 className='text-[14px] text-black font-semibold'>Ellsmartx</h4>
                            <p className='text-[12px]'>how nice does this look 😍 I feel it should be delicious..</p>
                        </div>
                        <div className='bg-gray-100 p-4 mt-4 rounded-lg'>
                            <h4 className='text-[14px] text-black font-semibold'>cassia</h4>
                            <p className='text-[12px]'>Take a rest, i'll be cheer up you again in 2 next game..</p>
                        </div>
                        <div className='bg-gray-100 p-4 mt-4 rounded-lg'>
                            <h4 className='text-[14px] text-black font-semibold'>amanda</h4>
                            <p className='text-[12px]'>you were stunning today, jan! 💗 great match 👍🏽👍🏽</p>
                        </div>
                        <div className='bg-gray-100 p-4 mt-4 rounded-lg'>
                            <h4 className='text-[14px] text-black font-semibold'>Denis Simonassi</h4>
                            <p className='text-[12px]'>It was a great match today Janzi! You did great😉🇩🇪</p>
                        </div>


                    </div>
                    <div className='w-[57%]'>
                        <div className="flex items-start mt-[30px] ml-[20px]">
                            <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                            <span className="text-[20px] text-black mt-[-5px] ml-2">Follow In Instagram</span>
                        </div>
                        {/* <div className='grid grid-cols-3  gap-y-3'>
                         <img src='/IMAGES/pinkcar.png' className='rounded-md'></img>
                         <img src='/IMAGES/black-dog.png' className='rounded-md'></img>
                         <img src='/IMAGES/scale.png' className='rounded-md'></img>
                         <img src='/IMAGES/food-hotdog.png' className='rounded-md'></img>
                         <img src='/IMAGES/headphone.png' className='rounded-md'></img>
                         <img src='/IMAGES/couple.png' className='rounded-md'></img>
                         <img src='/IMAGES/white-dog.png' className='rounded-md'></img>
                         <img src='/IMAGES/ground.png' className='rounded-md'></img>
                         <img src='/IMAGES/boxing.png' className='rounded-md'></img>
                       </div> */}
                        <div className='ml-3 mt-1'>
                            <div className='flex py-3 gap-4'>
                                <img src='/IMAGES/pinkcar.png' className='rounded-md h-[90px] w-[90px]'></img>
                                <img src='/IMAGES/black-dog.png' className='rounded-md h-[90px] w-[90px]'></img>
                                <img src='/IMAGES/scale.png' className='rounded-md h-[90px] w-[90px]'></img>
                            </div>
                            <div className='flex py-3 gap-4'>
                                <img src='/IMAGES/food-hotdog.png' className='rounded-md h-[90px] w-[90px]'></img>
                                <img src='/IMAGES/headphone.png' className='rounded-md h-[90px] w-[90px]'></img>
                                <img src='/IMAGES/couple.png' className='rounded-md h-[90px] w-[90px]'></img>
                            </div>
                            <div className='flex py-3 gap-4'>
                                <img src='/IMAGES/white-dog.png' className='rounded-md h-[90px] w-[90px]'></img>
                                <img src='/IMAGES/ground.png' className='rounded-md h-[90px] w-[90px]'></img>
                                <img src='/IMAGES/boxing.png' className='rounded-md h-[90px] w-[90px]'></img>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Footer;