import React, { useEffect, useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSendPost, deleteSendPost } from '../../redux/Action/ProfileSendPost.action';
import { Modal } from '@mui/material';
import { addSavePost, getSavePost } from '../../redux/Action/SavePost.action';

const ProfileYourPost = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.SendPost);
    const savedPosts = useSelector((state) => state.SavePost.getPosts.savedPosts);
    console.log("vsavedPostssavedPosts", savedPosts)
    const [openModal, setOpenModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [posts, setPosts] = useState([]);
    const [hoveredPost, setHoveredPost] = useState(null);
    const [localSavedPosts, setLocalSavedPosts] = useState(new Set());

    const loggedInUserId = localStorage.getItem("userId");



    // ✅ Refresh hone ke baad saved posts load karna ensure karo
    useEffect(() => {
        if (loggedInUserId) {
            console.log("loggedInUserIdloggedInUserId", loggedInUserId);

            dispatch(getSavePost(loggedInUserId));
        }
    }, [dispatch, loggedInUserId]);

    useEffect(() => {
        const storedSavedPosts = JSON.parse(localStorage.getItem("savedPosts")) || [];
        setLocalSavedPosts(new Set(storedSavedPosts));
    }, []);


    // ✅ User posts fetch karne ke liye
    useEffect(() => {
        dispatch(getSendPost());
    }, [dispatch]);

    // ✅ Sorted posts maintain karo
    useEffect(() => {
        if (userData?.getSendPost) {
            setPosts([...userData.getSendPost].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        }
    }, [userData]);

    const handleImageClick = (id) => {
        navigate(`/PostDetail/${id}`);
    };

    const handleDeleteClick = (id) => {
        setDeleteId(id);
        setOpenModal(true);
    };

    const confirmDelete = () => {
        if (deleteId) {
            dispatch(deleteSendPost(deleteId));
            setPosts(posts.filter(post => post._id !== deleteId));
            setOpenModal(false);
        }
    };
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
        <div className="max-w-[1320px] mx-auto mt-2 p-4">
            <div className="flex items-start">
                <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                <span className="text-[20px] text-black mt-[-5px] ml-2">Your Post</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white w-[24%] min-h-[250px] p-4 rounded-lg shadow-md"
                            onMouseEnter={() => setHoveredPost(item._id)}
                            onMouseLeave={() => setHoveredPost(null)}
                        >
                            <div
                                className={`absolute top-4 right-5 cursor-pointer text-red-600 transition-opacity duration-300 ${hoveredPost === item._id ? 'opacity-100' : 'opacity-0'}`}
                                onClick={() => handleDeleteClick(item._id)}
                            >
                                <DeleteIcon />
                            </div>

                            <div className="flex justify-center items-center" onClick={() => handleImageClick(item._id)}>
                                <img
                                    src={`http://localhost:5000/uploads/sendPostimg/${item.img}`}
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
                                                src={`http://localhost:5000/uploads/sendPostimg/${item.img}`}
                                                className='ml-4 mt-[12px] !w-[35px] h-[35px] rounded-md'
                                            />
                                            <div className='ml-2 mt-[7px] pb-2'>
                                                <h4>{item.username}</h4>
                                                <p className='text-[12px]'>
                                                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cursor-pointer mr-4 mt-4" onClick={() => handleSavePost(item._id)}>
                                            {savedPosts.some(savedPost => savedPost?.postId?._id === item._id) ? (
                                                <BookmarkIcon className="text-2xl text-blue-500" />
                                            ) : (
                                                <BookmarkBorderIcon className="text-2xl text-gray-500" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="bg-white h-auto flex justify-center items-center p-4 rounded-lg shadow-md w-full">
                        <p className="text-gray-500 text-lg">No Posts Available</p>
                    </div>
                )}
            </div>

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-lg font-bold">Confirm Deletion</h2>
                    <p className="text-gray-600 mt-2">Are you sure you want to delete this post?</p>
                    <div className="flex justify-end mt-4">
                        <button className="bg-gray-300 px-4 py-2 rounded-md mr-2" onClick={() => setOpenModal(false)}>Cancel</button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-md" onClick={confirmDelete}>Yes, Delete</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProfileYourPost;
