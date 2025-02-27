import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { addSendPost } from '../../../redux/Action/ProfileSendPost.action';

const ProfileSendVideo = () => {
    const dispatch= useDispatch();
    const userData = useSelector((state)=>state.SendPost);
    console.log("userData",userData);
    
    const [formData,setFormData] = useState({
        title:'',
        username:'',
        explanation:'',
        img:null,
        file: '',
    })
    console.log('formData', formData);
    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                file: URL.createObjectURL(file), // Show preview
                img: file
            }));
        }
    };
    const handleFileSelect = () => {
        document.getElementById("fileInput").click();
    };
    const handleSubmit = (e) => {
            e.preventDefault();
            const formDataToSend = new FormData();
            formDataToSend.append("title", formData.title);
            formDataToSend.append("username", formData.username);
            formDataToSend.append("explanation", formData.explanation);
           
            if (formData.img) {
                formDataToSend.append("img", formData.img);
            }
    
            dispatch(addSendPost(formDataToSend)).then((res) => {
                console.log("Backend Response:", res);
            });
        };
    return (
        <>
            <div className='max-w-[1320px] mx-auto p-4 mt-[15px]'>
                <div className='flex gap-5'>
                    <div className='bg-gray-200 p-[10px] flex items-center rounded-lg'>
                        <div className='h-[5px] w-[5px] rounded-full bg-red-500 mr-2'></div>
                        <span className='font-medium'>Send Post</span>
                    </div>

                    {/* <div className='font-medium mt-[10px]'>Send Video</div> */}
                </div>
                <div className='flex gap-6'>
                    <div className='w-[75%]'>
                        <div className='flex gap-6 mt-5'>
                            <div className='w-[50%]'>
                                <label for=''>Title</label><br />
                                <input type='text' className='p-1 bg-gray-100 w-full mt-3 outline-none' onChange={handleForm} value={formData.title} name='title'></input>
                            </div>
                            <div className='w-[50%] relative'>
                                <label htmlFor=''>Username</label><br />
                                <div className='flex items-center bg-gray-100  mt-3 w-full'>
                                    <input
                                        type='text'
                                        className='bg-transparent w-full p-1 focus:outline-none outline-none'
                                        onChange={handleForm}
                                        value={formData.username}
                                        name='username'
                                    />
                                    
                                </div>
                            </div>

                        </div>
                       
                        <div className='mt-6'>
                            <div>Explanation</div>
                            <div className=' bg-white shadow-md p-1 mt-[20px]'>
                                <div className='flex mt-[20px] gap-5 px-6'>
                                    <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-image.png' className='h-[20px] w-[20px] mt-1' /><span className='text-gray-600'>Image</span></div>
                                    <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-color.png' className='h-[15px] w-[15px] mt-[5px]' /><span className='text-gray-600'>Color</span></div>
                                    <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-text.png' className='h-[18px] w-[18px] mt-1' /><span className='text-gray-600'>Text</span></div>
                                    <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-align.png' className='h-[15px] w-[15px] mt-[5px]' /><span className='text-gray-600'>Align</span></div>
                                    <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-Link.png' className='h-[20px] w-[20px] mt-1' /><span className='text-gray-600'>Link</span></div>
                                </div>
                                <div className='px-6'>
                                    <input type='text' placeholder='Type...' className='bg-gray-100  pb-[180px] pt-1   rounded-md mt-7 w-[100%] mb-7 outline-none' onChange={handleForm} value={formData.explanation} name='explanation'></input></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[25%]'>
                        <div>Add Image</div>
                        <div className='bg-gray-100 p-6 py-[75px] mt-[20px] rounded-lg' >
                                {/* Show preview if file is selected, else show placeholder */}
                                {formData.file ? (
                                    <img src={formData.file} className='h-[100px] w-[100px] mx-auto' alt="Uploaded Image" />
                                ) : (
                                    <img src='/IMAGES/SendPostImg.png' className=' h-[60px] w-[70px] mt-[-20px] mx-auto'></img>
                                )}
                                <div className='text-center mt-[20px]'>Drop image here, paste or</div>
                                <div className='flex justify-center'>
                                    <input
                                        id="fileInput"
                                        type="file"
                                        className='hidden'
                                        onChange={handleFileChange}
                                        name='img'
                                    />
                                    <label
                                        htmlFor="fileInput"
                                        className='border border-gray-400 w-[100px] mt-[30px] text-center py-2 rounded-lg cursor-pointer'
                                    >
                                        <span className='text-gray-500'>Select</span>
                                    </label>
                                </div>
                            </div>
                            <input id="fileInput" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                        <div className='flex justify-end mt-[20px]'>
                            {/* <div className='bg-gray-100  flex gap-1 p-1 px-4 rounded-lg'><img src='/IMAGES/SendPostDraft.png' className='!h-[15px] !w-[15px] mt-1' /><span className='!text-gray-500 '>Draft</span></div>
                            <div className='bg-gray-100  flex gap-1 p-1 px-4 rounded-lg'><img src='/IMAGES/SendPosteye.png' className='!h-[15px] !w-[15px] mt-1' /><span className='!text-gray-500 '>Preview</span></div> */}
                            <button className='flex items-center bg-pink-500 px-4 py-2 rounded-lg gap-2 ' onClick={handleSubmit}>
                                <img src='/IMAGES/Contact-us-sendicon.png' alt="Send Icon" />
                                <div className='text-white'>Send</div>
                            </button>

                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}

export default ProfileSendVideo;