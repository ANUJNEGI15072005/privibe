import React from 'react'
import { NavLink } from 'react-router-dom';

const New = () => {
    return (
        <>
            <div className='w-auto h-80 '>
                <div className='flex justify-center items-center h-18  m-5'><h2 className='text-4xl  font-montserrat'>NEW ARRIVAL</h2></div>
                <div>
                    <div className='flex flex-row justify-center items-center flex-wrap'>
                        <div className="w-60 bg-white mx-2 shadow-lg overflow-hidden">
                            <div className="flex justify-center items-center pt-3">
                                <img src="/images/new-in-pics/new1.jpg" className="w-48 h-48 object-cover" alt="Traditional Jewel" />
                            </div>
                            <div className="pr-4 pl-4 text-center">
                                <p className="py-1 text-xl font-dmSerif text-gray-800">Ethereal Elegance</p>
                            </div>
                        </div>
                        <div className="w-60 bg-white mx-2 shadow-lg overflow-hidden">
                            <div className="flex justify-center items-center pt-3">
                                <img src="/images/new-in-pics/new2.jpg" className="w-48 h-48 object-cover" alt="Western Jewel" />
                            </div>
                            <div className="pr-4 pl-4 text-center">
                                <p className="py-1 text-xl font-dmSerif text-gray-800">4ever Divine</p>
                            </div>
                        </div>
                        <div className="w-60 bg-white mx-2 shadow-lg overflow-hidden">
                            <div className="flex justify-center items-center pt-3">
                                <img src="/images/new-in-pics/new3.jpg" className="w-48 h-48 object-cover" alt="Traditional Jewel" />
                            </div>
                            <div className="pr-4 pl-4 text-center">
                                <p className="py-1 text-xl font-dmSerif text-gray-800">Meenakari Jhumki</p>
                            </div>
                        </div>
                        <div className="w-60 bg-white mx-2 shadow-lg overflow-hidden">
                            <div className="flex justify-center items-center pt-3">
                                <img src="/images/new-in-pics/new4.jpg" className="w-48 h-48 object-cover" alt="Traditional Jewel" />
                            </div>
                            <div className="pr-4 pl-4 text-center">
                                <p className="py-1 text-xl font-dmSerif text-gray-800">Ivory Elegance</p>
                            </div>
                        </div>
                        <NavLink to={'/New_Arrival'} className="w-12 h-12 flex flex-col justify-center items-center bg-red-300 mx-2 shadow-lg overflow-hidden rounded-full cursor-pointer">
                            <div className="text-center flex flex-col justify-center items-center">
                                <div className="">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New;
