import React, { useEffect, useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { PopularPost } from '../../Constant/Index';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNavigate } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { TPost } from '../../Constant/Index';
import { ToPost } from '../../Constant/Index';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getCategory } from '../../redux/Action/Category.action';
import { addSavePost, getSavePost } from '../../redux/Action/SavePost.action';

const Sport = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.category);
    console.log("userData", userData);
    const savedPosts = useSelector((state) => state.SavePost.getPosts.savedPosts);
    console.log("vsavedPostssavedPosts", savedPosts)
    const loggedInUserId = localStorage.getItem("userId");
     const [localSavedPosts, setLocalSavedPosts] = useState(new Set());
    const navigate = useNavigate();
    const handleImageClick = (id) => {
        dispatch(getCategory(id));
        navigate(`/PostDetail/${id}`);
    }
    const getAllCategories = userData?.getAllCategory
    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch])
    const handleSavePost = async (postId) => {
        if (!loggedInUserId) {
            console.error("User ID is missing!");
            return;
        }

        const isAlreadySaved = localSavedPosts.has(postId);
        const payload = { postId };

        try {
            const response = await dispatch(addSavePost(loggedInUserId, payload));

            if (response?.message === "Post saved successfully") {
                dispatch(getSavePost(loggedInUserId));
                // setLocalSavedPosts(prevState => {
                //     const updatedSet = new Set([...prevState, postId]);
                //     localStorage.setItem("savedPosts", JSON.stringify([...updatedSet])); // ✅ Local storage me save karo
                //     return updatedSet;
                // });
            } else if (response?.message === "Post unsaved successfully") {
                dispatch(getSavePost(loggedInUserId));
                // setLocalSavedPosts(prevState => {
                //     const newSet = new Set(prevState);
                //     newSet.delete(postId);
                //     localStorage.setItem("savedPosts", JSON.stringify([...newSet])); // ✅ Local storage update karo
                //     return newSet;
                // });
            }
        } catch (error) {
            console.error("Error in saving post:", error);
        }
    };

    return (
        <div>
            <div className="max-w-[1320px] mx-auto  p-4">
                <div className="flex items-start">
                    <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                    <span className="text-[20px] text-black mt-[-5px] ml-2">Category : Sport</span>
                </div>
                {/* <div className="mt-6">
                    
                    <OwlCarousel
                        className="owl-theme Ppost_Slider"
                        items={4} 
                        loop={true} 
                        margin={10} 
                        nav 
                        dots={false}

                    >
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
                                    <div className='bg-gray-100 w-full pb-2 mt-3 rounded-lg'>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                                <img src={item.smallImg} className='ml-4 mt-[10px] !w-[40px] h-[40px]' />
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
                    

                </div> */}
                {/* <div className="mt-16">
                   
                    <OwlCarousel
                        className="owl-theme Ppost_Slider"
                        items={4}
                        loop={true}
                        margin={10} 
                        nav 
                        dots={false} 

                    >
}
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

                </div> */}
                <div className="mt-16">
                    {/* <OwlCarousel
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
                    </OwlCarousel> */}
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
                {/* <div className='flex gap-4 mt-[20px] ml-4'>
                    <div className='bg-gray-100 h-[40px] w-[40px] p-[8px] rounded-md text-center justify-center'>1</div>
                    <div className='mt-[9px] flex gap-6'>
                        <div>2</div>
                        <div>3</div>
                        <div>...</div>
                        <div>9</div>

                    </div>
                    <div><button className='bg-gray-100 h-[40px] w-[80px] p-[10px]  rounded-md text-center justify-center'>Next<ArrowForwardIosIcon className='!h-[12px] !w-[12px] ml-[5px] mt-[-1px]' /></button></div>
                </div> */}
            </div>
        </div>
    );
}

export default Sport;