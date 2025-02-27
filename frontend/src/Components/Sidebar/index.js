import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';
import CallIcon from '@mui/icons-material/Call';
import PostAddIcon from '@mui/icons-material/PostAdd';

const Sidebar = () =>{
    const location = useLocation()
    const navigate = useNavigate()
    const navbarClick = () => {
        navigate('/');
    }
    return (
        <div className='dashboard'>
            <div className='dashboard_data'>
                <div className='user_logo'>
                <h2 className="text-secondary text-[35px] cursor-pointer font-bold" onClick={() => navbarClick()}>MEGA.news</h2>
                </div>
                <div className='dashboard_diff_part'>
                    <Link to={'/dashboard'} className={`dashboard_icon_name ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                        <MdOutlineDashboardCustomize className='dashboard_icon' /><li>Dashboard</li>
                    </Link>
                    <Link to={'/user'} className={`dashboard_icon_name ${location.pathname === '/user' ? 'active' : ''}`}>
                        <FaRegUserCircle className='dashboard_icon' /><li>User</li>
                    </Link>
                    <Link to={'/CategoryAdd'} className={`dashboard_icon_name ${location.pathname === '/CategoryAdd' ? 'active' : ''}`}>
                        <CategoryIcon className='dashboard_icon' /><li>Category</li>
                    </Link>
                   
                    <Link to={'/ContactDashboard'} className={`dashboard_icon_name ${location.pathname === '/ContactDashboard' ? 'active' : ''}`}>
                        <CallIcon className='dashboard_icon mt-[1px]' /><li>Contact</li>
                    </Link>
                    {/* <Link to={'/active-user'} className={`dashboard_icon_name ${location.pathname === '/active-user' ? 'active' : ''}`}>
                        <FiUserPlus className='dashboard_icon' /><li>Active_User</li>
                    </Link> */}
                </div>
            </div>

        </div>
    );
}

export default Sidebar;