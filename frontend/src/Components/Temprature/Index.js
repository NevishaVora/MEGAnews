import React from 'react';

const Temprature = ()=> {
    return (
        <div>
            <div className='bg-gray-100'>
                <div className='max-w-[1320px] mx-auto p-4 flex justify-between pt-[50px] pb-[40px]'>
                       <div className='w-[50%]'>
                          <img src='/IMAGES/weather-widget.png'/>
                       </div>
                       <div className='w-[50%] grid grid-cols-2 gap-4 ml-4'>
                       <img src='/IMAGES/Ankara.png'></img>
                       <img src='/IMAGES/alaska.png'></img>
                       <img src='/IMAGES/Berlin.png'></img>
                       <img src='/IMAGES/paris.png'></img>

                       </div>
                </div>
            </div>
        </div>
    );
}

export default Temprature;