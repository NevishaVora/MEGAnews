import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../redux/Action/Contact.action';


const ContactDashboard = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.contact);
    console.log("userData", userData);
    const getAllContactDetail = userData?.getContacts
    useEffect(() => {
        dispatch(getAllContacts());
    }, [dispatch]);

    return (
        <div>
            <div className="table-container">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border p-2 text-left">Sr.No</th>
                            <th className="border p-2 text-left">Subject</th>
                            <th className="border p-2 text-left">Name</th>
                            <th className="border p-2 text-left">Email</th>
                            <th className="border p-2 text-left">Explanation</th>
                            <th className="border p-2 text-left">Image</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {getAllContactDetail && getAllContactDetail.length > 0 ? (
                            getAllContactDetail.map((res, index) => (
                                <tr key={res.id}>
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{res.subject}</td>
                                    <td className="border p-2">{res.name}</td>
                                    <td className="border p-2">{res.email}</td>
                                    <td className="border p-2">{res.explanation}</td>
                                    <td className="border p-2">
                                        <img  src={`http://localhost:5000/uploads/contactimg/${res.img}`} alt={res.subject} className="w-16 h-16 object-cover" />
                                    </td>
                                    
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="border p-2 text-center">No contacts available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContactDashboard;
