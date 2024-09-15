import React from 'react';
import { NavLink } from 'react-router-dom';
import { forwardRef } from 'react';

const ShowSale = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='w-auto h-80'>
            <div className='flex justify-center items-center h-18 m-5'>
                <h2 className='text-4xl font-montserrat'>SUMMER SALE</h2>
            </div>
            <div className='flex flex-row justify-center items-center flex-wrap'>
                <div className="w-60 bg-white mx-2 shadow-lg overflow-hidden">
                    <div className="flex justify-center items-center pt-3">
                        <img src="/images/summer-sale-pics/ss1.jpg" className="w-48 h-48 object-cover" alt="Lovie Dovie" />
                    </div>
                    <div className="pr-4 pl-4 text-center">
                        <p className="py-1 text-xl font-dmSerif text-gray-800">Lovie Dovie</p>
                    </div>
                </div>
                <div className="w-60 bg-white mx-2 shadow-lg overflow-hidden">
                    <div className="flex justify-center items-center pt-3">
                        <img src="/images/summer-sale-pics/ss2.jpg" className="w-48 h-48 object-cover" alt="Corporate Girlies" />
                    </div>
                    <div className="pr-4 pl-4 text-center">
                        <p className="py-1 text-xl font-dmSerif text-gray-800">Corporate Girlies</p>
                    </div>
                </div>
                <div className="w-60 bg-white mx-2 shadow-lg overflow-hidden">
                    <div className="flex justify-center items-center pt-3">
                        <img src="/images/summer-sale-pics/ss3.jpg" className="w-48 h-48 object-cover" alt="Rainbow Rave" />
                    </div>
                    <div className="pr-4 pl-4 text-center">
                        <p className="py-1 text-xl font-dmSerif text-gray-800">Rainbow Rave</p>
                    </div>
                </div>
                <div className="w-60 bg-white mx-2 shadow-lg overflow-hidden">
                    <div className="flex justify-center items-center pt-3">
                        <img src="/images/summer-sale-pics/ss4.jpg" className="w-48 h-48 object-cover" alt="Date Night" />
                    </div>
                    <div className="pr-4 pl-4 text-center">
                        <p className="py-1 text-xl font-dmSerif text-gray-800">Date Night</p>
                    </div>
                </div>
                <NavLink to={'/Sale'} className="w-12 h-12 flex flex-col justify-center items-center bg-red-300 mx-2 shadow-lg overflow-hidden rounded-full cursor-pointer">
                    <div className="text-center flex flex-col justify-center items-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </div>
                </NavLink>
            </div>
        </div>
    );
});

export default ShowSale;
