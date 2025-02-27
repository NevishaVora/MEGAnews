import React, { useEffect, useState } from "react";
import { addCategory, deleteCategory, getAllCategory, updateCategory } from "../redux/Action/Category.action";
import { useDispatch, useSelector } from "react-redux";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const CategoryAdd = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.category);
    console.log("userData", userData);

    const getAllCategories = userData?.getAllCategory
    const [show, setShow] = useState(false);
    const showToggle = () => setShow(!show);
    const [showUpdate, setShowUpdate] = useState(false);
    const showUpdateToggle = () => setShowUpdate(!showUpdate);

    const [updateModal, setUpdateModal] = useState(false);
    const updateToggle = () => { setUpdateModal(!updateModal) };
    const [deleteModal, setDeleteModal] = useState(false);
    const deleteToggle = () => { setDeleteModal(!deleteModal) };
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [deleteModal1, setDeleteModal1] = useState(false);

    const deleteToggle1 = () => {
        setDeleteModal1(!deleteModal1);
        setDeleteModal(false);
    };

    const [formData, setFormData] = useState({
        title: "",
        username: "",
        explanation: "",
        img: null,
    });

    // Function to handle form input changes
    const handleForm = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            const file = files[0];
            const previewUrl = URL.createObjectURL(file); // Create preview URL
            setFormData((prev) => ({
                ...prev,
                img: file,
                imgPreview: previewUrl, // Store preview URL
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const openUpdateModal = (category) => {
        setFormData({
            title: category.title || "",
            username: category.username || "",
            explanation: category.explanation || "",
            img: null,
        });
        setDeleteUserId(category._id);
        updateToggle();
    };

    const handleUpdate = () => {
        const payload = new FormData();
        payload.append("title", formData.title);
        payload.append("username", formData.username);
        payload.append("explanation", formData.explanation);
        if (formData.img) {
            payload.append("img", formData.img);
        }

        dispatch(updateCategory(deleteUserId, payload)).then(() => {
            updateToggle();
            setFormData({
                title: "",
                username: "",
                explanation: "",
                img: null,
            });
            setDeleteUserId(null);
        });
    };

    // Function to submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("username", formData.username);
        formDataToSend.append("explanation", formData.explanation);
        formDataToSend.append("img", formData.img); // Append file

        dispatch(addCategory(formDataToSend)).then(() => {
            showToggle();
            setFormData({
                title: "",
                username: "",
                explanation: "",
                img: null,
                imgPreview: null,
            });
        });
    };
    const handledelete = () => {
        dispatch(deleteCategory(deleteUserId)).then(() => {
            deleteToggle1(false);
        })
    }
    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch])

    return (
        <>
            <div className="flex justify-end mb-4">
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={showToggle}
                >
                    Add Category
                </button>
            </div>

            <div className="table-container">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border p-2 text-left">Sr.No</th>
                            <th className="border p-2 text-left">Title</th>
                            <th className="border p-2 text-left">Username</th>
                            <th className="border p-2 text-left">Explanation</th>
                            <th className="border p-2 text-left">Image</th>
                            <th className="border p-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(getAllCategories) && getAllCategories.length > 0 ? (
                            getAllCategories.map((category, index) => (
                                <tr key={index}>
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{category.title}</td>
                                    <td className="border p-2">{category.username}</td>
                                    <td className="border p-2">{category.explanation}</td>
                                    <td className="border p-2">
                                        {category.img && (
                                            <img
                                                src={`http://localhost:5000/uploads/categoryimg/${category.img}`} // Assuming 'category.img' contains the image URL returned from the API
                                                className="w-16 h-16 object-cover"
                                            />
                                        )}
                                    </td>
                                    <td className="flex items-center mt-[30px] ml-2">
                                        <FaPencil className="text-green-700 mr-2 text-[20px] cursor-pointer" onClick={() => openUpdateModal(category)} />
                                        <MdDelete className="text-red-500 text-[20px] cursor-pointer" onClick={() => { deleteToggle(); setDeleteUserId(category._id) }} />

                                        {deleteModal && (
                                            <div className="custom-modal-overlay">
                                                <div className="custom-modal-content">
                                                    <div className="custom-modal-header">
                                                        <h2>Confirm Delete</h2>
                                                        <button className="custom-close-btn" onClick={() => setDeleteModal(false)}>X</button>
                                                    </div>
                                                    <div className="custom-modal-body">
                                                        <p>Are you sure you want to delete this user?</p>
                                                    </div>
                                                    <div className="custom-modal-footer">
                                                        <button className="custom-btn secondary" onClick={() => setDeleteModal(false)}>No</button>
                                                        <button className="custom-btn danger" onClick={handledelete}>Yes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                    </td>


                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="border p-2 text-center">
                                    No categories available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {show && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={showToggle} // Close modal on background click
                >
                    <div
                        className="bg-white p-8 rounded-lg shadow-lg w-[600px] relative"
                        onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
                    >
                        <h2 className="text-xl font-semibold mb-4">Add Category</h2>

                        <label className="block mb-2">
                            Title:
                            <input
                                type="text"
                                className="w-full p-2 border outline-none rounded mt-1"
                                placeholder="Enter title"
                                name="title"
                                value={formData.title}
                                onChange={handleForm}
                            />
                        </label>

                        <label className="block mb-2">
                            Username:
                            <input
                                type="text"
                                className="w-full p-2 border outline-none rounded mt-1"
                                placeholder="Enter username"
                                name="username"
                                value={formData.username}
                                onChange={handleForm}
                            />
                        </label>

                        <label className="block mb-2">
                            Explanation:
                            <textarea
                                className="w-full p-2 border outline-none rounded mt-1"
                                placeholder="Enter explanation"
                                name="explanation"
                                value={formData.explanation}
                                onChange={handleForm}
                            ></textarea>
                        </label>

                        <label className="block mb-4">
                            Image:
                            <input
                                type="file"
                                className="w-full mt-1"
                                name="img"
                                onChange={handleForm}
                            />
                        </label>

                        <div className="flex justify-end gap-2">
                            <button
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                                onClick={showToggle}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={handleSubmit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {updateModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={updateToggle} // Close modal on background click
                >
                    <div
                        className="bg-white p-8 rounded-lg shadow-lg w-[600px] relative"
                        onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
                    >
                        <h2 className="text-xl font-semibold mb-4">Update Category</h2>

                        <label className="block mb-2">
                            Title:
                            <input
                                type="text"
                                className="w-full p-2 border outline-none rounded mt-1"
                                placeholder="Enter title"
                                name="title"
                                value={formData.title}
                                onChange={handleForm}
                            />
                        </label>

                        <label className="block mb-2">
                            Username:
                            <input
                                type="text"
                                className="w-full p-2 border outline-none rounded mt-1"
                                placeholder="Enter username"
                                name="username"
                                value={formData.username}
                                onChange={handleForm}
                            />
                        </label>

                        <label className="block mb-2">
                            Explanation:
                            <textarea
                                className="w-full p-2 border outline-none rounded mt-1"
                                placeholder="Enter explanation"
                                name="explanation"
                                value={formData.explanation}
                                onChange={handleForm}
                            ></textarea>
                        </label>

                        <label className="block mb-4">
                            Image:
                            <input
                                type="file"
                                className="w-full mt-1"
                                name="img"
                                onChange={handleForm}
                            />
                        </label>

                        <div className="flex justify-end gap-2">
                            <button
                                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                                onClick={updateToggle}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                onClick={handleUpdate} // Call update function
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default CategoryAdd;
