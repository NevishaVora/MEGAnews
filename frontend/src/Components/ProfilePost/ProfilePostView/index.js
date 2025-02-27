import React from "react";

const ProfilePostView = () => {
    return (
        <div className="max-w-[1320px] mx-auto mt-2 p-4">
            <div className="flex  gap-5">
                {/* View Posts Section */}
                <div className="w-full md:w-[65%]">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-4 w-2 bg-red-600 rounded"></div>
                        <span className="text-lg font-semibold text-gray-900">View Posts</span>
                    </div>
                    
                        <div className="bg-white  flex justify-center items-center h-[87%]">
                            <img src="/IMAGES/chart.png" alt="Chart" className="rounded-md h-[100%]" />
                        </div>
                   

                </div>

                {/* Satisfaction of Posts Section */}
                <div className="w-full md:w-[35%] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-4 w-2 bg-red-600 rounded"></div>
                        <span className="text-lg font-semibold text-gray-900">Satisfaction Of Posts</span>
                    </div>
                    <div className="bg-white rounded-lg shadow-md">
                        <div className="flex">
                            <div className="bg-gray-100 m-3 p-3 text-center flex flex-col items-center justify-center">
                                <h4>August 2022</h4>
                                <img src="/IMAGES/icon1.png" className="my-2" alt="Icon" />
                                <h4>20 Points</h4>
                            </div>
                            <div className="bg-gray-100 m-3 p-3 text-center flex flex-col items-center justify-center">
                                <h4>August 2022</h4>
                                <img src="/IMAGES/icon2.png" className="my-2" alt="Icon" />
                                <h4>20 Points</h4>
                            </div>
                            <div className="bg-gray-100 m-3 p-3 text-center flex flex-col items-center justify-center">
                                <h4>August 2022</h4>
                                <img src="/IMAGES/icon3.png" className="my-2" alt="Icon" />
                                <h4>20 Points</h4>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="bg-gray-100 m-3 p-3 text-center flex flex-col items-center justify-center">
                                <h4>August 2022</h4>
                                <img src="/IMAGES/icon4.png" className="my-2" alt="Icon" />
                                <h4>20 Points</h4>
                            </div>
                            <div className="bg-gray-100 m-3 p-3 text-center flex flex-col items-center justify-center">
                                <h4>August 2022</h4>
                                <img src="/IMAGES/icon5.png" className="my-2" alt="Icon" />
                                <h4>20 Points</h4>
                            </div>
                            <div className="bg-gray-100 m-3 p-3 text-center flex flex-col items-center justify-center">
                                <h4>August 2022</h4>
                                <img src="/IMAGES/icon6.png" className="my-2" alt="Icon" />
                                <h4>20 Points</h4>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="bg-gray-100 m-3 p-3 text-center flex flex-col items-center justify-center">
                                <h4>August 2022</h4>
                                <img src="/IMAGES/icon7.png" className="my-2" alt="Icon" />
                                <h4>20 Points</h4>
                            </div>
                            <div className="bg-gray-100 m-3 p-3 text-center flex flex-col items-center justify-center">
                                <h4>August 2022</h4>
                                <img src="/IMAGES/icon8.png" className="my-2" alt="Icon" />
                                <h4>20 Points</h4>
                            </div>
                            <div className="bg-gray-100 m-3 p-3 text-center flex flex-col items-center justify-center">
                                <h4>August 2022</h4>
                                <img src="/IMAGES/icon9.png" className="my-2" alt="Icon" />
                                <h4>20 Points</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePostView;