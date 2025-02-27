import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { LuUser } from "react-icons/lu";
import { userGet } from '../redux/Action/User.action';
import { getAllContacts } from '../redux/Action/Contact.action'; // Contacts fetch karne ke liye action

function Dashboard() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth);
    const contactData = useSelector((state) => state.contact);

    const totalUsers = userData?.getUser?.length || 0;  
    const totalContacts = contactData?.getContacts?.length || 0; 

    useEffect(() => {
        dispatch(userGet()); // Users fetch karna
        dispatch(getAllContacts()); // Contacts fetch karna
    }, [dispatch]);

    return (
        <div>
            <div className='row'>
                {/* Total Users */}
                <div className='col-3'>
                    <Card>
                        <Card.Body className='detail_user'>
                            <div className='icon_circle'>
                                <LuUser />
                            </div>
                            <div>
                                <h6 className='name_total_user'>Total Users</h6>
                                <p className='number_user'>{String(totalUsers).padStart(2, '0')}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                 {/* Total Admin*/}
                 <div className='col-3'>
                    <Card>
                        <Card.Body className='detail_user'>
                            <div className='icon_circle'>
                                <LuUser />
                            </div>
                            <div>
                                <h6 className='name_total_user'>Total Admin</h6>
                                <p className='number_user'>01</p> {/* Dynamic User Count */}
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                {/* Total Contacts */}
                <div className='col-3'>
                    <Card>
                        <Card.Body className='detail_user'>
                            <div className='icon_circle'>
                                <LuUser />
                            </div>
                            <div>
                                <h6 className='name_total_user'>Total Contacts</h6>
                                <p className='number_user'>{String(totalContacts).padStart(2, '0')}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
