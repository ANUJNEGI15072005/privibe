import React, { useState } from 'react';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='bg-slate-50 z-20 h-20 px-5 flex items-baseline sticky top-0'>
                <div className='flex items-baseline'>
                    <Link to={'/'} className='text-6xl font-bebas m-2'>PRIVIBE</Link>
                </div>
                <div className='w-full'>
                    <ul className='flex justify-evenly items-baseline text-2xl font-edu-vic text-black h-full'>
                        <NavLink to={'/Earrings'} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}><li className='cursor-pointer rounded-xl p-2 '>Earrings</li></NavLink>
                        <NavLink to={'/Rings'} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}><li className='cursor-pointer p-1'>Rings</li></NavLink>
                        <NavLink to={'/Bracelet'} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}><li className='cursor-pointer p-1'>Bracelet</li></NavLink>
                        <NavLink to={'/Neckpiece'} className={({ isActive }) =>
                            isActive ? 'border-b-2 border-black' : 'border-b-2 border-transparent'}><li className='cursor-pointer p-1'>Neckpiece</li></NavLink>
                    </ul>
                </div>
                <div className="flex m-2 space-x-4">
                    <Link to={'/My_Profile'}><FaUser className="text-2xl cursor-pointer hover:text-gray-300" aria-label="Logout" /></Link>

                    <Link to={'/Manifest_List'}><FaHeart className="text-2xl cursor-pointer hover:text-gray-300" aria-label="Wishlist" /></Link>
                    <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-300" aria-label="Shopping Cart" />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
