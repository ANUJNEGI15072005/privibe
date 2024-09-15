import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Social = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center w-full h-80 bg-gradient-to-br from-purple-500 via-pink-400 to-red-400 shadow-lg ">
            <div className='w-1/2 h-full flex justify-end items-end'>
                <img className='w-80 rounded-t-2xl shadow-lg ' src="images/social/Instagram.jpg" alt="Instagram" />
            </div>
            <div className="flex flex-col justify-start items-center lg:w-1/2 text-center lg:text-left">
                <p className="text-6xl font-dancing-script text-white mb-2 ">
                    Follow us on,
                </p>
                <p className="text-8xl font-bebas text-white mb-4 flex items-center">
                    Instagram <FaInstagram className="ml-4 text-7xl text-white " />
                </p>
                <a href="https://www.instagram.com/privibe_/"><button className="bg-white text-pink-600 text-lg font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
                    Follow
                </button></a>
            </div>
        </div>
    );
}

export default Social;
