import React, { useEffect, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Header=()=> {
    const [showDropdown, setShowDropdown] = useState(false);
    const [initial,setInitial]=useState('N');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const titles = {
        '/dashboard':'Dashboard',
        '/user': 'User',
        '/CategoryAdd':'Category',
        '/ContactDashboard':'Contact',
        
    };
    useEffect(()=>{
        const username = localStorage.getItem("username");
        const email = localStorage.getItem("email");
        if(username){
            setInitial(username[0].toUpperCase());
            setUsername(username);
        }
        if(email){
          setEmail(email);
        }
    },[])
    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };
    
    
    return (
        <div>
            <div className='user_detail'>
                <h2 className='title_name'> {titles[location.pathname]}</h2>
                {/* <Dropdown show={showDropdown} onToggle={handleDropdownToggle} className='dropdown_profile'>
                    <Dropdown.Toggle 
                        as="div" 
                        onClick={handleDropdownToggle} 
                        style={{ cursor: 'pointer' }}
                        className='circle'> {initial}
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu align="end">
                       <Dropdown.Item>{`Hey,${username}`}</Dropdown.Item>
                       <Dropdown.Item>{email}</Dropdown.Item><hr/>
                        
                    </Dropdown.Menu>
                </Dropdown> */}
            </div>
        </div>
    );
}

export default Header;