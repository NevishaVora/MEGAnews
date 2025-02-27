import React, { useEffect } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { PopularPost } from '../Constant/Index'; // Assuming you import the PopularPost data from a constants file
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../redux/Action/Category.action';

const PPost = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.category);
    console.log("userData", userData);
    const getAllCategories = userData?.getAllCategory
    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch])
    const handleImageClick = () => {
        navigate('/PostDetail');
    }

    return (
        <div>
            <div className="max-w-[1320px] mx-auto mt-2 p-4">
                <div className="flex items-start">
                    <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                    <span className="text-[20px] text-black mt-[-5px] ml-2">All Category Post</span>
                </div>
                <div className="mt-12 flex flex-wrap  gap-4">
                    {Array.isArray(getAllCategories) && getAllCategories.length > 0
                        ? getAllCategories.map((item, index) => (
                            <div key={index} className="bg-white w-[24%] min-h-[250px] p-4 rounded-lg shadow-md">
                                <div className="flex justify-center items-center" onClick={() => handleImageClick(item._id)}>
                                    <img
                                        src={`http://localhost:5000/uploads/categoryimg/${item.img}`}
                                        alt={item.title}
                                        className="w-full h-auto object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-black text-[14px]">{item.title}</p>
                                    <p className="text-sm text-gray-600 mt-2 text-[12px]">{item.explanation}</p>
                                    <div className='bg-gray-100 w-full mt-3 rounded-lg'>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                                <img
                                                    src={`http://localhost:5000/uploads/categoryimg/${item.img}`}
                                                    className='ml-4 mt-[12px] !w-[35px] h-[35px] rounded-md'
                                                    alt="Category"
                                                />
                                                <div className='ml-2 mt-[7px] pb-2'>
                                                    <h4>{item.username}</h4>
                                                    <p className='text-[12px]'>{new Date(item.createdAt).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}</p>
                                                </div>
                                            </div>
                                            {/* <div className="cursor-pointer mr-4 mt-4" onClick={() => handleSavePost(item._id)}>
                                                    {savedPosts.some(savedPost => savedPost?.postId?._id === item._id) ? (
                                                        <BookmarkIcon className="text-2xl text-blue-500" />
                                                    ) : (
                                                        <BookmarkBorderIcon className="text-2xl text-gray-500" />
                                                    )}
                                                </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : (
                            <div className="bg-white h-auto flex justify-center items-center p-4 rounded-lg shadow-md w-full">
                                <p className="text-gray-500 text-lg">No Category</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PPost;
