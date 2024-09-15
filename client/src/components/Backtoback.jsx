import React from 'react';

const Backtoback = () => {
    return (
        <>
            <div className='overflow-hidden border-b'>
                <div className='scrolling-wrapper'>
                    <div className='scrolling-content'>
                        {/* Original Content */}
                        <div className='flex items-center'>
                            <p className='px-4 py-1'>Free shipping on order above &#8377;799</p>
                            <div className='h-2 w-2 bg-black rounded-full mx-2'></div>
                        </div>
                        <div className='flex items-center'>
                            <p className='px-4 py-1'>Customize your gift box</p>
                            <div className='h-2 w-2 bg-black rounded-full mx-2'></div>
                        </div>
                        <div className='flex items-center'>
                            <p className='px-4 py-1'>Most affordable jewellery in India</p>
                            <div className='h-2 w-2 bg-black rounded-full mx-2'></div>
                        </div>
                        {/* Duplicate Content */}
                        <div className='flex items-center'>
                            <p className='px-4 py-1'>Free shipping on order above &#8377;799</p>
                            <div className='h-2 w-2 bg-black rounded-full mx-2'></div>
                        </div>
                        <div className='flex items-center'>
                            <p className='px-4 py-1'>Customize your gift box</p>
                            <div className='h-2 w-2 bg-black rounded-full mx-2'></div>
                        </div>
                        <div className='flex items-center'>
                            <p className='px-4 py-1'>Most affordable jewellery in India</p>
                            <div className='h-2 w-2 bg-black rounded-full mx-2'></div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .scrolling-wrapper {
                    position: relative;
                    overflow: hidden;
                    white-space: nowrap;
                }

                .scrolling-content {
                    display: flex;
                    flex-wrap: nowrap;
                    width: 50%; 
                    animation: scroll 20s linear infinite;
                }

                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }
            `}</style>
        </>
    );
};

export default Backtoback;
