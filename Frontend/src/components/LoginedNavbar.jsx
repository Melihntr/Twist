import React from 'react'
import { CgProfile } from "react-icons/cg";
import { PiSignOutThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FcHome } from "react-icons/fc";
import { Link } from 'react-router-dom';

const LoginedNavbar = () => {
    return (
        <div className="w-full h-[80px] flex items-center justify-between bg-gray-800 p-4 absolute z-50">
          {/* Logo Section */}
          <div className="flex items-center justify-center h-full w-1/3">
            <h1 className="text-3xl font-extrabold text-white">Social Media</h1>
          </div>
    
          {/* Search Section */}
          <div className="flex items-center justify-center h-full w-1/3 relative  px-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-10 pl-4 pr-12 rounded-md outline-none"
            />
            <CiSearch className="text-3xl absolute right-4 text-black cursor-pointer" />
          </div>
    
          {/* Links Section */}
          <div className="flex items-center justify-center  h-full w-1/3 space-x-6 text-white gap-10 text-xl font-bold mr-10 ">
           <Link to={"/"}> <a href="#" className="hover:text-yellow-300 transition duration-300 flex gap-3 items-center">
              <FcHome /> Home
            </a></Link>
           <Link to={"/profile"}> <a href="#" className="hover:text-yellow-300 transition duration-300 flex gap-3 items-center">
              <CgProfile />Profile
            </a></Link>
            <Link to={"/"}><a href="#" className="hover:text-yellow-300 transition duration-300 flex gap-3 items-center">
             <PiSignOutThin /> Signout
            </a></Link>
          </div>
        </div>
      );
}

export default LoginedNavbar
