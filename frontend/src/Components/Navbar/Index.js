import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { useNavigate } from 'react-router-dom';

import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, userSignUp } from '../redux/Action/User.action';


const Navbar = () => {
    const dispatch = useDispatch()
    const authData = useSelector((state) => state.auth)
    console.log('authData', authData);
    console.log("cbhadhcbad");


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    console.log('formData', formData);

    const navigate = useNavigate();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [userEmail, setUserEmail] = useState(null);
    const login = localStorage.getItem('login')
    const showToggle = () => { setShow(!show) }
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown ke liye state
    const username = localStorage.getItem('username')
    console.log('username', username);
    // const userId= localStorage.getItem('userId')
    // console.log('userId', userId);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const navbarClick = () => {
        navigate('/');
    }
    const handleSportclick = () => {
        navigate('/CategoriesSection');
    }
    const handleClickContact = () => {
        navigate('/ContactUs')
    }
    const handleClickAbout = () => {
        navigate('/AboutUs')
    }
    const handleProfileClick = () => {
        navigate('/ProfilePost')
    }
    const handleDashboard = () => {
        navigate('/dashboard')
    }
    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userSignUp(formData))
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        dispatch(userLogin(formData)).then(() => {
            setIsLoginOpen(false);
        })
    }
    const handleLogout = () => {
        setUserEmail(null); // User session remove karega
        setIsDropdownOpen(false); // Dropdown close karega
        localStorage.clear()
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");  // State to handle search input
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);  // State to manage Categories dropdown
    const [isPagesOpen, setIsPagesOpen] = useState(false); // State to manage Pages dropdown visibility
    const [isBehzadOpen, setIsBehzadOpen] = useState(false);

    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };
    const toggleCategories = () => { setIsCategoriesOpen(!isCategoriesOpen); };  // Toggle for categories dropdown
    const togglePages = () => { setIsPagesOpen(!isPagesOpen); };
    const toggleBehzad = () => { setIsBehzadOpen(!isBehzadOpen); };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);  // Update the search query state
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for: ", searchQuery);  // You can replace this with actual search logic
    };

    return (
        <div>
            <div className="max-w-[1320px] mx-auto flex justify-between p-4">
                <div className="text-left flex gap-5">
                    <h2 className="text-secondary text-2xl cursor-pointer" onClick={() => navbarClick()}>MEGA.news</h2>
                    <ul className="hidden lg:flex gap-5 text-[16px] mt-[6px]">
                        <li className="relative"> {/* Position relative to place the dropdown */}
                            <a href="#" onClick={toggleCategories} className="flex items-center gap-2 hover:text-red-500 cursor-pointer relative group">
                                Categories
                                <KeyboardArrowDownIcon
                                    style={{
                                        transition: 'transform 0.5s ease-in-out',
                                        transform: isCategoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    }}
                                />
                            </a>
                        </li>
                        <li className="relative group" onMouseEnter={togglePages} onMouseLeave={togglePages}> {/* Hover event */}
                            <a href="#" className="flex items-center gap-2  hover:text-red-500 cursor-pointer">
                                Pages
                                <KeyboardArrowDownIcon
                                    style={{
                                        transition: 'transform 0.3s ease-in-out',
                                        transform: isPagesOpen ? 'rotate(180deg)' : 'rotate(0deg)', // Icon rotates
                                    }}
                                />
                            </a>
                            {/* Dropdown that appears on hover */}
                            {isPagesOpen && (
                                <div className="absolute left-0 bg-white shadow-lg mt-2 w-[150px] rounded-md z-20">
                                    <ul className="text-gray-600">
                                        <li className="hover:text-red-600 cursor-pointer py-2 px-4">SubMenu One</li>
                                        <li className="hover:text-red-600 cursor-pointer py-2 px-4">SubMenu Two</li>
                                        <li className="hover:text-red-600 cursor-pointer py-2 px-4">SubMenu Three</li>
                                        <li className="hover:text-red-600 cursor-pointer py-2 px-4">SubMenu Four</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li><a href="#" onClick={() => handleClickContact()} className=' hover:text-red-500 cursor-pointer'>Contact US</a></li>
                        <li><a href="#" onClick={() => handleClickAbout()} className=' hover:text-red-500 cursor-pointer'>About Us</a></li>
                    </ul>
                </div>
                <div className="hidden sm:flex text-right gap-5 mt-[6px] items-center">
                    <div className="hidden md:flex text-[12px] bg-gray-100 rounded-md py-1 px-5 justify-evenly">
                        <MoreVertIcon />
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Search Anything"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="text-black bg-transparent lg:ml-5 focus:outline-none mt-[2px] text-[14px]"
                            />
                        </form>
                        <SearchIcon />
                    </div>
                    {/* <div className="hidden sm:flex text-[16px] gap-[7px] relative group "  >
                        <img src="/IMAGES/man.png" className="w-[30px] h-[30px]" alt="User" />
                        <span className='hover:text-red-500 cursor-pointer' >Behzad</span>
                        <KeyboardArrowDownIcon
                            onClick={toggleBehzad}
                            style={{
                                transition: 'transform 0.3s ease-in-out',
                                transform: isBehzadOpen ? 'rotate(180deg)' : 'rotate(0deg)', // Icon rotates
                            }}
                            className='hover:text-red-700'

                        />
                        {isBehzadOpen && (
                            <div className="absolute  bg-white shadow-lg mt-[40px] w-[120px] rounded-md z-20">
                                <ul className="text-gray-600 leading-[2.5]">
                                    <li className='hover:text-red-600 cursor-pointer text-center' onClick={() => handleProfileClick()}><PermIdentityIcon className='text-gray-400 h-[10px] w-[10px]' />Profile</li>
                                    <li className="hover:text-red-600 cursor-pointer text-center" ><TurnedInNotIcon className='text-gray-400 h-[10px] w-[10px]' />Marked</li>
                                    <li className="hover:text-red-600 cursor-pointer text-center "><LogoutIcon className='text-gray-400 h-[10px] w-[10px]' />Exit</li>

                                </ul>
                            </div>
                        )}
                    </div> */}
                    <div className="hidden sm:flex text-[16px] gap-[7px] relative group">
                        {login ? (
                            <div className="relative">
                                <div
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white font-semibold cursor-pointer shadow-md transition-all duration-200 hover:bg-red-600"
                                    onClick={toggleDropdown}
                                >
                                    {username?.charAt(0)?.toUpperCase()}
                                </div>

                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute bg-white shadow-xl mt-2 w-44 rounded-lg z-20 right-0 overflow-hidden border border-gray-200 animate-fadeIn">
                                        <ul className="text-gray-700">
                                            <li
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-base font-medium"
                                                onClick={handleProfileClick}
                                            >
                                                <PermIdentityIcon className="text-gray-500" /> Profile
                                            </li>
                                            <li
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer text-base font-medium"
                                                onClick={handleDashboard}
                                            >
                                                <DashboardIcon className="text-gray-500" /> Dashboard
                                            </li>
                                            <li
                                                className="px-4 py-2 text-center bg-red-500 text-white font-semibold cursor-pointer hover:bg-red-600 transition-all duration-200 rounded-b-lg"
                                                onClick={handleLogout}
                                            >
                                                Log Out
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <span
                                className="hover:text-red-500 cursor-pointer bg-gray-100 px-7 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-200"
                                onClick={() => setIsLoginOpen(true)}
                            >
                                Login
                            </span>
                        )}

                        {/* Login Modal */}
                        {isLoginOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
                                    <button
                                        className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                                        onClick={() => setIsLoginOpen(false)}
                                    >
                                        <CloseIcon />
                                    </button>
                                    <h2 className="text-2xl font-semibold text-center mb-[15px] text-red-600 tracking-wide uppercase">
                                        Login
                                    </h2>
                                    <form onSubmit={handleSubmitLogin}>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            className="w-full border p-3 rounded mb-[15px] outline-none"
                                            onChange={handleForm}
                                            value={formData.email}
                                            name="email"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="w-full border p-3 rounded mb-[15px] outline-none"
                                            onChange={handleForm}
                                            value={formData.password}
                                            name="password"
                                        />
                                        <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                                            Login
                                        </button>
                                    </form>

                                    <p className="text-center text-gray-600 mt-3">
                                        Don't have an account?
                                        <span
                                            className="text-red-500 cursor-pointer hover:underline ml-1"
                                            onClick={() => {
                                                setIsLoginOpen(false);
                                                setIsRegisterOpen(true);
                                            }}
                                        >
                                            Register
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Register Modal */}
                        {isRegisterOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] relative">
                                    <button
                                        className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                                        onClick={() => setIsRegisterOpen(false)}
                                    >
                                        <CloseIcon />
                                    </button>
                                    <h2 className="text-2xl font-semibold text-center mb-[15px] text-red-600 tracking-wide uppercase">
                                        Register
                                    </h2>
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            placeholder="username"
                                            className="w-full border p-3 rounded mb-[15px] outline-none"
                                            onChange={handleForm}
                                            value={formData.username}
                                            name="username"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full border p-3 rounded mb-[15px] outline-none"
                                            onChange={handleForm}
                                            value={formData.email}
                                            name="email"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="w-full border p-3 rounded mb-[15px] outline-none"
                                            onChange={handleForm}
                                            value={formData.password}
                                            name="password"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
                                        >
                                            Register
                                        </button>
                                    </form>

                                    <p className="text-center text-gray-600 mt-3">
                                        Already have an account?
                                        <span
                                            className="text-red-500 cursor-pointer hover:underline ml-1"
                                            onClick={() => {
                                                setIsRegisterOpen(false);
                                                setIsLoginOpen(true);
                                            }}
                                        >
                                            Login
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    <BookmarkBorderIcon className="ml-4 text-2xl" />
                </div>
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <MenuIcon />
                    </button>
                </div>
            </div>
            {/* Categories Dropdown - Full width with background */}
            {isCategoriesOpen && (
                <div className=" absolute w-full max-w-[1320px] mx-auto p-4 bg-white shadow-lg  z-50 ml-[100px]" >
                    <div className='flex gap-3'>
                        <div className='w-[75%]'>
                            <div className='flex p-4 gap-8'>
                                <div className='flex gap-4 w-[33.33%] '>
                                    <div>
                                        <img src='/IMAGES/pinkcar.png' className='w-[170px]'></img>
                                    </div>
                                    <div>
                                        <div className="flex items-start mt-[2px] cursor-pointer" onClick={() => handleSportclick()}>
                                            <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                                            <span className="text-[20px] text-black mt-[-5px] ml-2">Car</span>
                                        </div>
                                        <ul className='text-[14px] text-gray-600 leading-loose mt-[10px]'>
                                            <li className='hover:text-red-500 cursor-pointer'>Car News</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Car Articales</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Car Prices</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Car Videos</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='flex gap-4 w-[33.33%]'>
                                    <div>
                                        <img src='/IMAGES/couple.png' className='w-[170px] rounded-[14px]'></img>
                                    </div>
                                    <div>
                                        <div className="flex items-start mt-[2px] cursor-pointer" onClick={() => handleSportclick()}>
                                            <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                                            <span className="text-[20px] text-black mt-[-5px] ml-2">Girlish</span>
                                        </div>
                                        <ul className='text-[14px] text-gray-600 leading-loose mt-[10px]'>
                                            <li className='hover:text-red-500 cursor-pointer'>Dance Training</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Movies</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Cooking Training </li>
                                            <li className='hover:text-red-500 cursor-pointer'>Child Custody</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='flex gap-4 w-[33.33%]'>
                                    <div>
                                        <img src='/IMAGES/hotdog.png' className='w-[170px] h-[170px] rounded-[14px]'  ></img>
                                    </div>
                                    <div>
                                        <div className="flex items-start mt-[2px] cursor-pointer" onClick={() => handleSportclick()}>
                                            <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                                            <span className="text-[20px] text-black mt-[-5px] ml-2">Cooking</span>
                                        </div>
                                        <ul className='text-[14px] text-gray-600 leading-loose mt-[10px]'>
                                            <li className='hover:text-red-500 cursor-pointer'>Cake Baking</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Cooking Training</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Drink Training</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Fast Foods</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='flex p-4 gap-8'>
                                <div className='flex gap-4 w-[33.33%] '>
                                    <div>
                                        <img src='/IMAGES/scale.png' className='w-[170px]'></img>
                                    </div>
                                    <div>
                                        <div className="flex items-start mt-[2px] cursor-pointer" onClick={() => handleSportclick()}>
                                            <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                                            <span className="text-[20px] text-black mt-[-5px] ml-2">Technology</span>
                                        </div>
                                        <ul className='text-[14px] text-gray-600 leading-loose mt-[10px]'>
                                            <li className='hover:text-red-500 cursor-pointer'>Operating System</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Internet</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Camera</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Laptop</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='flex gap-4 w-[33.33%]'>
                                    <div>
                                        <img src='/IMAGES/boxing.png' className='w-[170px] rounded-[14px]'></img>
                                    </div>
                                    <div>
                                        <div className="flex items-start mt-[2px] cursor-pointer" onClick={() => handleSportclick()}>
                                            <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                                            <span className="text-[20px] text-black mt-[-5px] ml-2">Sports</span>
                                        </div>
                                        <ul className='text-[14px] text-gray-600 leading-loose mt-[10px]'>
                                            <li className='hover:text-red-500 cursor-pointer'>Sports News</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Football Results</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Boxing Results </li>
                                            <li className='hover:text-red-500 cursor-pointer'>Vollyball Results</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='flex gap-4 w-[33.33%]'>
                                    <div>
                                        <img src='/IMAGES/music_classification.png' className='w-[170px]  rounded-[14px]'  ></img>
                                    </div>
                                    <div>
                                        <div className="flex items-start mt-[2px] cursor-pointer" onClick={() => handleSportclick()}>
                                            <div className="h-[15px] w-[6px] bg-red-600 rounded-md mt-1"></div>
                                            <span className="text-[20px] text-black mt-[-5px] ml-2">Music</span>
                                        </div>
                                        <ul className='text-[14px] text-gray-600 leading-loose mt-[10px]'>
                                            <li className='hover:text-red-500 cursor-pointer'>Composition</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Effect of Music</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Music mix</li>
                                            <li className='hover:text-red-500 cursor-pointer'>Music Style</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[25%] mt-[110px]">
                            <OwlCarousel
                                className="owl-theme slider2"
                                loop
                                margin={10}
                                nav
                                items={1} // Display 1 item at a time vertically
                                dots={false}

                                stagePadding={0} // Ensure no padding on the sides
                                vertical // Vertical scrolling enable
                                verticalSwiping // Enable swipe for vertical scrolling
                            >
                                <img src="/IMAGES/squirrel.png" alt="Squirrel" />
                                <img src="/IMAGES/free_course.png" alt="Free Course" />
                                <img src="/IMAGES/mobile.png" alt="Mobile" />
                            </OwlCarousel>
                        </div>

                    </div>
                </div>
            )}

            {/* Mobile Menu (Hamburger Menu) */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white p-4`}>
                <ul className="flex flex-col gap-4 text-[16px]">
                    <li className="flex items-center gap-2">
                        <img src="/IMAGES/man.png" className="w-[30px] h-[30px]" alt="User" />
                        <span>Behzad</span>
                        <KeyboardArrowDownIcon />

                    </li>
                    <li><a href="#">Categories <KeyboardArrowDownIcon /></a></li>
                    <li><a href="#">Pages <KeyboardArrowDownIcon /></a></li>
                    <li><a href="#">Contact US</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Search Anything</a></li>
                    <li><BookmarkBorderIcon className="text-2xl" />Save Anything</li>
                </ul>
            </div>

            {/* Mobile Search Section with Input Field */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[rgba(0,0,0,0.8)] text-white p-4 flex justify-center items-center`}>
                <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 w-full max-w-[500px]">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search Anything"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="text-white bg-transparent border-b-2 border-white px-2 py-1 w-full"
                    />
                    <button type="submit" className="hidden">Search</button>
                </form>
            </div>

        </div>
    );
}

export default Navbar;
