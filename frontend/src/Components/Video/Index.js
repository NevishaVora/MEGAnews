import React, { useState } from 'react';
import { VideoPlay } from '../Constant/Index';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Video = () => {
    return (
        <div>
            <div className='bg-gray-100'>
                <div className="max-w-[1320px] mx-auto mt-2 p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                            <span className="text-[20px] text-black mt-[-5px] ml-2">Latest Videos</span>
                        </div>
                    </div>

                    <div className='flex justify-between mt-8'>
                        <div className='w-[50%] relative'>
                            <img src='/IMAGES/VideoImage.png' className='rounded-lg w-[744px] h-[344px]' />

                            {/* Play video image centered */}
                            <img
                                src='/IMAGES/playvideo.png'
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] transition-transform duration-300 ease-in-out hover:scale-110"
                            />

                            <div className="absolute bottom-[10px] mx-[10px] bg-white w-[97%] h-auto bg-opacity-50 p-4 rounded-md">
                                <h3 className="text-black text-l font-semibold">How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)</h3>
                                <p className="text-black text-[12px]">
                                    You’ve read all your free member-only stories, become a member to get unlimited access.
                                    Your membership fee supports the voices you want to hear more from.
                                </p>
                            </div>
                        </div>

                        <div className ='w-[60%] ml-2'>
                            <div className="relative">
                                <OwlCarousel
                                    className='owl-theme slider2'
                                    loop
                                    margin={10}
                                    nav
                                    items={1.5}
                                    dots={false}
                                   
                                >
                                    <div className="item">
                                        <div className="flex flex-col gap-4">
                                            {VideoPlay.slice(0, 2).map((video, index) => (
                                                <div key={index} className="flex bg-white p-4 rounded-lg shadow-md w-[410px]">
                                                    <div className="w-[40%]">
                                                        <img src={video.videoimage} alt={video.videoTitle} className="w-full h-[130px] rounded-md" />
                                                    </div>
                                                    <div className="w-[60%] pl-4">
                                                        <h3 className="text-[14px] font-semibold text-black">{video.videoTitle}</h3>
                                                        <p className="text-[12px] text-gray-600">{video.videoPara}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="flex flex-col gap-4 w-[410px]">
                                            {VideoPlay.slice(2, 4).map((video, index) => (
                                                <div key={index} className="flex bg-white p-4 rounded-lg shadow-md">
                                                    <div className="w-[40%]">
                                                        <img src={video.videoimage} alt={video.videoTitle} className="w-full h-[130px] rounded-md" />
                                                    </div>
                                                    <div className="w-[60%] pl-4">
                                                        <h3 className="text-[14px] font-semibold text-black">{video.videoTitle}</h3>
                                                        <p className="text-[12px] text-gray-600">{video.videoPara}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </OwlCarousel>

                                
                                {/* <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full px-6">
                                    <div
                                        className="bg-gray-200 py-[3px] px-[7px] rounded-md flex justify-center items-center cursor-pointer"
                                        // Custom prev button click logic if necessary
                                    >
                                        <ArrowBackIosIcon className="text-gray-500" style={{ height: '16px', width: '16px' }} />
                                    </div>
                                    <div
                                        className="bg-gray-200 py-[3px] px-[7px] rounded-md flex justify-center items-center cursor-pointer"
                                        // Custom next button click logic if necessary
                                    >
                                        <ArrowForwardIosIcon className="text-black" style={{ height: '16px', width: '16px' }} />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
