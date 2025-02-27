import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { PopularPost } from '../../Constant/Index';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {  useNavigate } from 'react-router-dom';
import { TPost } from '../../Constant/Index';
import { ToPost } from '../../Constant/Index';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProfileCards = () => {
    const navigate = useNavigate();
    const handleImageClick = ()=>{
        navigate('/PostDetail');
    }
    return (
        <>
            <div className="max-w-[1320px] mx-auto  p-4">
                <div className="mt-6">
                    {/* OwlCarousel to replace the grid layout */}
                    <OwlCarousel
                        className="owl-theme Ppost_Slider"
                        items={4} // Fixed to show 4 items at a time
                        loop={true} // Enable looping
                        margin={10} // Margin between items
                        nav // Enable navigation arrows
                        dots={false} // Disable dots

                    >
                        {/* Map over the PopularPost array */}
                        {PopularPost.map((item, index) => (
                            <div key={index} className="bg-white h-auto grid grid-rows-2 gap-4 p-4 rounded-lg shadow-md" >

                                <div className="flex justify-center items-center" onClick={() => handleImageClick()}>
                                    <img src={item.Popularimg} alt="Sea Sport" className="w-full h-auto object-cover rounded-lg" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-black text-[14px]">{item.PopularTitle}</p>
                                    <p className="text-sm text-gray-600 mt-2 text-[12px] ">
                                        {item.PopularPara}
                                    </p>
                                    <div className='bg-gray-100 w-full  mt-3 rounded-lg'>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                                <img src={item.smallImg} className='ml-4 mt-[10px] !w-[30px] h-[30px]' />
                                                <div className='ml-2 mt-[7px]'>
                                                    <h4>{item.smallImgName}</h4>
                                                    <p className='text-[12px]'>{item.smallImgDate}</p>
                                                </div>
                                            </div>
                                            <BookmarkBorderIcon className="text-2xl mr-4 mt-4 text-gray-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
                <div className="mt-7">
                    {/* 4 column grid layout for larger screens, single column for smaller screens */}
                    <OwlCarousel
                        className="owl-theme Ppost_Slider"
                        items={4} // Fixed to show 4 items at a time
                        loop={true} // Enable looping
                        margin={10} // Margin between items
                        nav // Enable navigation arrows
                        dots={false} // Disable dots

                    >

                        {/* Map over the PopularPost array */}
                        {TPost.map((item, index) => (
                            <div key={index} className="bg-white h-auto grid grid-rows-2 gap-4 p-4 rounded-lg shadow-md">
                                <div className="flex justify-center items-center" onClick={() => handleImageClick()}>
                                    <img src={item.Popularimg} alt="Sea Sport" className="w-full h-auto object-cover rounded-lg" />
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-black text-[14px]">{item.PopularTitle}</p>
                                    <p className="text-sm text-gray-600 mt-2 text-[12px] ml-1">
                                        {item.PopularPara}
                                    </p>
                                    <div className='bg-gray-100 w-full  mt-3 rounded-lg'>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                                <img src={item.smallImg} className='ml-4 mt-[10px] !w-[30px] h-[30px]' />
                                                <div className='ml-2 mt-[7px]'>
                                                    <h4>{item.smallImgName}</h4>
                                                    <p className='text-[12px]'>{item.smallImgDate}</p>
                                                </div>
                                            </div>
                                            <BookmarkBorderIcon className="text-2xl mr-4 mt-4 text-gray-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>

                </div>
                <div className="mt-7">
                    <OwlCarousel
                        className="owl-theme Ppost_Slider"
                        items={4} // Fixed to show 4 items at a time
                        loop={true} // Enable looping
                        margin={10} // Margin between items
                        nav // Enable navigation arrows
                        dots={false} // Disable dots

                    >
                        {ToPost.map((item, index) => (
                            <div key={index} className="bg-white h-auto grid grid-rows-2 gap-4 p-4 rounded-lg shadow-md">
                                <div className="flex justify-center items-center" onClick={() => handleImageClick()}>
                                    <img src={item.Popularimg} alt="Sea Sport" className="w-full h-auto object-cover rounded-lg" />
                                </div>
                                <div className="flex flex-col ">
                                    <p className="text-black text-[14px]">{item.PopularTitle}</p>
                                    <p className="text-sm text-gray-600 mt-2 text-[12px] ">
                                        {item.PopularPara}
                                    </p>
                                    <div className='bg-gray-100 w-full  mt-3 rounded-lg'>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                                <img src={item.smallImg} className='ml-4 mt-[10px] !w-[30px] h-[30px]' />
                                                <div className='ml-2 mt-[7px]'>
                                                    <h4>{item.smallImgName}</h4>
                                                    <p className='text-[12px]'>{item.smallImgDate}</p>
                                                </div>
                                            </div>
                                            <BookmarkBorderIcon className="text-2xl mr-4 mt-4 text-gray-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>

                </div>
                <div className='flex gap-4 mt-[20px] ml-4'>
                    <div className='bg-gray-100 h-[40px] w-[40px] p-[8px] rounded-md text-center justify-center'>1</div>
                    <div className='mt-[9px] flex gap-6'>
                        <div>2</div>
                        <div>3</div>
                        <div>...</div>
                        <div>9</div>

                    </div>
                    <div><button className='bg-gray-100 h-[40px] w-[80px] p-[10px]  rounded-md text-center justify-center'>Next<ArrowForwardIosIcon className='!h-[12px] !w-[12px] ml-[5px] mt-[-1px]' /></button></div>
                </div>
            </div>
        </>
    );
}

export default ProfileCards;