import React from 'react';

const Cricket = () => {
    return (
        <div>
            <div
                className="w-full h-[464px] bg-cover bg-center mt-8"
                style={{ backgroundImage: "url('/IMAGES/cricket-ground.png')" }}>
                <div className='max-w-[1320px] mx-auto flex pt-[75px] gap-5'>
                    <img src='/IMAGES/calendar.png' className='w-[30%] h-[334px]' />
                    <img src='/IMAGES/club-table.png' className='w-[40%] h-[334px]' />
                    <img src='/IMAGES/competition.png' className='w-[30%] h-[334px]' />
                </div>
            </div>
        </div>
    );
}

export default Cricket;
