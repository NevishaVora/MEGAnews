import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
            <h2 className="text-secondary text-2xl mb-4">MEGA.news</h2>
            <div className="h-2 w-[400px] bg-gray-300 mb-4 rounded-md">
                <div className="h-full bg-red-500 animate-progress rounded-md"></div>
            </div>
        </div>
            );
};
  export default Loading;
