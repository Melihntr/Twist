import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdExplore, MdMessage, MdBookmark, MdHome } from "react-icons/md";

const Leftbar = () => {
  return (
    <div className="w-[15%] h-[100vh] bg-slate-800 flex flex-col items-start p-5 ">
      {/* Profile Section */}

      {/* Social Media Navigation Section */}
      <div className="w-full mb-8">
        <h3 className="text-lg text-white mb-4">Navigation</h3>
        <div className="flex flex-col gap-5">
          <a
            href="#"
            className="flex items-center gap-3 text-white hover:text-blue-500 transition"
          >
            <CgProfile className="text-[20px] text-white" />
            <span className="text-lg">Username</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-white hover:text-blue-500 transition"
          >
            <IoIosNotifications className="text-[20px] text-white" />
            <span className="text-lg">Notification</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-white hover:text-blue-500 transition"
          >
            <MdHome className="text-2xl" />
            <span className="text-lg">Home</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-white hover:text-blue-400 transition"
          >
            <MdExplore className="text-2xl" />
            <span className="text-lg">Explore</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-white hover:text-green-500 transition"
          >
            <MdMessage className="text-2xl" />
            <span className="text-lg">Messages</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-white hover:text-yellow-500 transition"
          >
            <MdBookmark className="text-2xl" />
            <span className="text-lg">Saved</span>
          </a>
        </div>
      </div>

      {/* Additional Links Section */}
      <div className="w-full mb-8">
        <h3 className="text-lg text-white mb-4">More</h3>
        <div className="flex flex-col gap-4">
          <a href="#" className="text-white hover:text-gray-400 transition">
            Settings
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition">
            Help Center
          </a>
          <a href="#" className="text-white hover:text-gray-400 transition">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
