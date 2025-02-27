import React from 'react';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { RelatedP } from '../../Constant/Index';

const RelatedPost = ()=> {
    return (
        <div >
           
                <div className="flex items-start mt-[70px]">
                    <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                    <span className="text-[20px] text-black mt-[-5px] ml-2">Related Post</span>
                </div>
                <div className="mt-6">
                <OwlCarousel
                        className="owl-theme Ppost_Slider"
                        items={4} // Fixed to show 4 items at a time
                        loop={true} // Enable looping
                        margin={10} // Margin between items
                        nav // Enable navigation arrows
                        dots={false} // Disable dots
                        
                    >
                        {RelatedP.map((item, index) => (
                            <div key={index} className="bg-white h-auto grid grid-rows-2 gap-4 p-4 rounded-lg shadow-md">
                                <div className="flex justify-center items-center">
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
                </div>
            
        
    );
}

export default RelatedPost;