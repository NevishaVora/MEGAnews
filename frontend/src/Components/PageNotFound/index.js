import React from 'react';
import Navbar from '../Navbar/Index';
import Footer from '../Footer/Index';

const PageNotFound = () => {
    return (
        <div>
            <Navbar />

            <div className='mt-[120px] mb-[150px]'>
                <div className='text-red-500 text-[150px] text-center [text-shadow:_4px_4px_10px_rgba(255,0,0,0.8)]'>
                    404
                </div>


                <div className=' text-center'>OOPS!Page You're Looking For Doesn't Exist. Please Use Search For Help</div>
            </div>
            <Footer/>
        </div>
    );
}

export default PageNotFound;