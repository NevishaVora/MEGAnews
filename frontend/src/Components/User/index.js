import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userGet } from '../redux/Action/User.action';

const User = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth); // Assuming state.user.users holds the user data
    console.log("userData",userData);
    
const getData = userData?.getUser

    useEffect(() => {
        dispatch(userGet());
    }, [dispatch]);
   
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {getData && getData.length > 0 ? (
                        getData.map((user, index) => (
                            <tr key={user._id}> {/* Assuming user has _id */}
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default User;
