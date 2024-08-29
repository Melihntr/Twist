import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative w-full h-[200px] bg-[#1E293B] text-white flex flex-col justify-center items-center">
      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.1,22.26,102.3,35.81,161.7,35.81,91,0,173.1-36.91,263.6-46.29,79.4-8.46,160.5,13.61,240,35.5,66.9,18.19,133.7,36.37,200.3,27.91,73.9-9.94,144.5-47.94,218.2-57.21C1088,26,1144,54,1200,63.79V0Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mb-4 z-10">
        <a href="#" className="text-white hover:text-gray-400 transition duration-300">
          <FaFacebookF size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition duration-300">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition duration-300">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition duration-300">
          <FaLinkedinIn size={24} />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="z-10 text-sm mb-5">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
