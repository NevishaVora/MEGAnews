import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const navbarClick=()=>{
        navigate('/')
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");  // State to handle search input
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

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
                    <h2 className="text-secondary text-2xl cursor-pointer" onClick={()=>navbarClick()}>MEGA.news</h2>
                    <ul className="hidden lg:flex gap-5 text-[16px] mt-[6px]">
                        <li>
                            <a href="#">Categories <KeyboardArrowDownIcon /></a>
                        </li>
                        <li>
                            <a href="#">Pages <KeyboardArrowDownIcon /></a>
                        </li>
                        <li><a href="#">Contact US</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className="hidden sm:flex text-right gap-5 mt-[6px] items-center">
                    <div className="hidden md:flex text-[12px] bg-gray-100  rounded-md py-1 px-5 justify-evenly">
                        <MoreVertIcon />
                        <form onSubmit={handleSearchSubmit} >
                        
                        <input
                            type="text"
                            placeholder="Search Anything"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="text-black bg-transparent  lg:ml-5 focus:outline-none mt-[2px] text-[14px]"
                        />
                    </form>
                        <SearchIcon />
                    </div>
                    <div className=" hidden sm:flex text-[16px] gap-[7px]">
                        <img src="/IMAGES/man.png" className="w-[30px] h-[30px]" alt="User" />
                        <span>Behzad</span>
                        <KeyboardArrowDownIcon className="gap-[20px]" />
                    </div>
                    <BookmarkBorderIcon className="ml-4 text-2xl" />
                </div>
                <div className="lg:hidden flex items-center ">
                    <button onClick={toggleMenu}>
                        <MenuIcon />
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Hamburger Menu) */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white p-4`}>
                <ul className="flex flex-col gap-4 text-[16px]">
                 {/* Add Behzad section to the menu */}
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
                    <li> <BookmarkBorderIcon className="text-2xl" />Save Anything</li>

                   
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
                    <button type="submit" className="hidden">Search</button> {/* Invisible button for form submission */}
                </form>
            </div>

            <div className='max-w-[1320px] mx-auto p-4 mt-[-10px]'>
                <div className='flex'>
                   <ul className='flex gap-2'>
                    <li>Home <ArrowForwardIosIcon className='!h-[12px] !w-[12px]'/></li>
                    <li>Featured <ArrowForwardIosIcon  className='!h-[12px] !w-[12px]'/></li>
                    <li className='text-gray-400 text-[14px] mt-[3px]'>How to Spend The Perfect Day On Croatia's Most Magical Island</li>
                   </ul>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
