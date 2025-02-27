import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../redux/Action/Admin.action";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const dispatch = useDispatch();
    const adminData = useSelector((state) => state.admin)
    console.log('adminData', adminData);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    console.log('formData', formData);

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await dispatch(adminLogin(formData)); // Response ko ek variable me store karo
            if (res && res.accessToken) {
                navigate('/dashboard'); // Agar accessToken hai toh navigate karo
            }
        } catch (error) {
            console.log("Login error:", error);
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
                <form onSubmit={handleSubmitLogin}>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2 ">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg  outline-none"
                            onChange={handleForm}
                            value={formData.email}
                            name="email"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-lg outline-none"
                            onChange={handleForm}
                            value={formData.password}
                            name="password"
                        />
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
