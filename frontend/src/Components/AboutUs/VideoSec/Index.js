import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MegaNews } from '../../Constant/Index';

const VideoSec = () => {
    return (
        <>
            <div className='max-w-[1320px] mx-auto p-4 mt-[-10px]'>
                <div className='flex'>
                    <ul className='flex gap-2'>
                        <li>Home <ArrowForwardIosIcon className='!h-[12px] !w-[12px]' /></li>
                        <li className='text-gray-500'>About US </li>
                    </ul>
                </div>
                <div className='bg-gray-100 mt-4 p-7 rounded-xl'>
                    <div className='text-[30px] text-normal'>We pay attention to your needs and do the best design.</div>
                    <div className='flex gap-12 mt-4 pb-3'>
                        <div className='w-[50%] text-justify leading-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat.</div>
                        <div className='w-[50%]'><img src='/IMAGES/About-us-Video.png'></img></div>
                    </div>
                </div>

            </div>
            <div className='flex gap-8'>
                <div className=' mt-8 p-1  w-[60%]'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d95606.52322840318!2d-88.04881576099697!3d41.51069209297391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAddress%20%3A%201234%20Foxrun%20St.New%20Lenox%2C%20IL%20123456!5e0!3m2!1sen!2sin!4v1733725841440!5m2!1sen!2sin"
                        className="w-full h-[360px] rounded-r-xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='mt-14 w-[40%]'>
                    <div className="flex items-start">
                        <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                        <span className="text-[20px] text-black mt-[-5px] ml-2">Mega news information</span>
                    </div>
                    <div className='flex gap-2 mt-[24px]'>
                        <div className='w-[4px] h-[202px] rounded-[12px] bg-gray-200'>

                        </div>
                        <div>
                            <div className='flex gap-1'>
                                <img src='/IMAGES/About-Us-email.png'></img>
                                <span className='text-gray-600'>Email : management@mega.news</span>
                            </div>
                            <div className='flex gap-1 mt-8'>
                                <img src='/IMAGES/About-us-mobile.png'></img>
                                <span className='text-gray-600'>Phone number : +1(234) 567-8910</span>
                            </div>
                            <div className='flex gap-1 mt-8'>
                                <img src='/IMAGES/about-us-Fax.png'></img>
                                <span className='text-gray-600'>Fax : +1(234) 567-8910</span>
                            </div>
                            <div className='flex gap-1 mt-8'>
                                <img src='/IMAGES/About-us-Address.png'></img>
                                <span className='text-gray-600'>Address : 1234 Foxrun St.New Lenox, IL 123456</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-100 p-2 flex mt-6 rounded-lg gap-2 w-[60%]'>
                        <img src='/IMAGES/About-us-timing.png'></img>
                        <div className='text-gray-600'>Responding 24 hours a day, 7 days a week</div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1320px] mx-auto p-4 mt-[10px]'>
                <div className="flex items-start mt-6">
                    <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                    <span className="text-[20px] text-black mt-[-5px] ml-2">Mega News team</span>
                </div>
               

                    <div className='flex gap-5 mt-[30px]'>
                        {MegaNews.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-xl h-auto w-[232px] p-4 rounded-xl"
                            >
                                <div>
                                    <img
                                        src={item.MegaNewsimg}
                                        className="h-[114px] w-[114px] rounded-lg mt-[2px] mx-auto"
                                        alt={item.MegaNewsWork}
                                    />
                                </div>
                                <div className="text-center mt-[20px] text-gray-600">
                                    {item.MegaNewsWork}
                                </div>
                                <div className="bg-gray-100 p-2 rounded-xl mt-[30px] text-center">
                                    {item.MegaNewsName}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
           

        </>
    );
}

export default VideoSec;