import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
const NavHomeSection = () =>{
    return (
        <>
             <div className='max-w-[1320px] mx-auto p-4 mt-[-10px]'>
                <div className='flex'>
                   <ul className='flex gap-2'>
                    <li>Home <ArrowForwardIosIcon className='!h-[12px] !w-[12px]'/></li>
                    <li className='text-gray-500'>Sport </li>
                   </ul>
                </div>
                <div className='bg-gray-100 p-2 mt-5 rounded-lg'>
                     <div className='flex justify-between '>
                        <div>
                            <ul className='flex gap-5 ml-2 mt-1'>
                                <li className='text-red-500'>New</li>
                                <li>Trendy</li>
                                <li>Popular</li>
                                <li>Top</li>
                            </ul>
                        </div>
                        <div className='flex gap-4'>
                           <FormatListBulletedIcon className='mt-2'/>
                           <div className='bg-gray-200 rounded-md p-[5px]'>
                           <ViewCompactIcon/>
                           </div>
                        </div>
                     </div>
                </div>
            </div>
        </>
    );
}

export default NavHomeSection;