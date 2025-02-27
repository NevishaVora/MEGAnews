import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/Action/Contact.action';

const SecondSecNav = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.contact);
    console.log("userData", userData);
    const [formData, setFormData] = useState({
        subject: '',
        name: '',
        email: '',
        file: '',
        explanation: '',
        img: null,
    });
    console.log('formData', formData);

    const [show, setShow] = useState(false);
    const showToggle = () => setShow(!show);

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

    // Trigger file input on button click
    const handleFileSelect = () => {
        document.getElementById("fileInput").click();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("subject", formData.subject);
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("explanation", formData.explanation);
        if (formData.img) {
            formDataToSend.append("img", formData.img);
        }

        dispatch(addContact(formDataToSend)).then((res) => {
            console.log("Backend Response:", res);
        });
    };
    return (
        <div>
            <div className='max-w-[1320px] mx-auto p-4 mt-[-10px]'>
                <div className='flex'>
                    <ul className='flex gap-2'>
                        <li>Home <ArrowForwardIosIcon className='!h-[12px] !w-[12px]' /></li>
                        <li className='text-gray-500'>Contact US </li>
                    </ul>
                </div>
                <div className='flex gap-6 mt-5'>
                    <div className='w-[33.33%]'>
                        <label for=''>Subject</label><br />
                        <input type='text' className='p-1 bg-gray-200 w-full mt-3 outline-none' value={formData.subject}
                            onChange={handleForm} name='subject'></input>
                    </div>
                    <div className='w-[33.33%]'>
                        <label for=''>Name</label><br />
                        <input type='text' className='p-1 bg-gray-200 w-full mt-3 outline-none' value={formData.name}
                            onChange={handleForm} name='name'></input>
                    </div>
                    <div className='w-[33.33%]'>
                        <label for=''>Email</label><br />
                        <input type='text' className='p-1 bg-gray-200 w-full mt-3 outline-none' value={formData.email}
                            onChange={handleForm} name='email'></input>
                    </div>
                </div>
                <div className='mt-3'>
                    <div>Explanation</div>
                    <div className='flex gap-4'>

                        <div className='w-[75%] bg-white shadow-md p-1 mt-[20px]'>
                            <div className='flex mt-[20px] gap-5 px-6'>
                                <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-image.png' className='h-[20px] w-[20px] mt-1' /><span className='text-gray-600'>Image</span></div>
                                <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-color.png' className='h-[15px] w-[15px] mt-[5px]' /><span className='text-gray-600'>Color</span></div>
                                <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-text.png' className='h-[18px] w-[18px] mt-1' /><span className='text-gray-600'>Text</span></div>
                                <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-align.png' className='h-[15px] w-[15px] mt-[5px]' /><span className='text-gray-600'>Align</span></div>
                                <div className='bg-gray-200  flex gap-1 p-1 px-3 rounded-lg'><img src='/IMAGES/contact-us-Link.png' className='h-[20px] w-[20px] mt-1' /><span className='text-gray-600'>Link</span></div>
                            </div>
                            <div className='px-6'>
                                <input type='text' placeholder='Type...' className='bg-gray-100 outline-none pb-[180px] pt-1   rounded-md mt-7 w-[100%] mb-7 ' value={formData.explanation}
                                    onChange={handleForm} name='explanation'></input></div>
                        </div>

                        <div className='w-[25%]'>
                            <div>Add File</div>
                            <div className='bg-gray-100 p-6 py-[75px] mt-[20px] rounded-lg' >
                                {/* Show preview if file is selected, else show placeholder */}
                                {formData.file ? (
                                    <img src={formData.file} className='h-[100px] w-[100px] mx-auto' alt="Uploaded Image" />
                                ) : (
                                    <img src='/IMAGES/Contact-us-file.png' className='h-[60px] w-[60px] mx-auto' alt="Placeholder" />
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
                        </div>
                    </div>

                </div>
                <div className='mt-3 flex gap-3 p-2 justify-end '>
                    <button className='flex items-center bg-pink-500 px-4 py-2 rounded-lg gap-2' onClick={handleSubmit}>
                        <img src='/IMAGES/Contact-us-sendicon.png' alt="Send Icon" />
                        <div className='text-white'>Send</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SecondSecNav;