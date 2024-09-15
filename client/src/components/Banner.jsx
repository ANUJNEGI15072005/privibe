import React from 'react';

function Banner({ CollectionRef }) {

  const scrollToElement = (ref) => {
    if (ref && ref.current) {
      let headerOffset= 98;

      const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-end items-center w-full h-80 p-4 bg-gradient-to-r from-red-300 to-pink-100 overflow-hidden">
        <div className="flex flex-col justify-center items-center lg:w-1/2 text-center lg:text-left">
          <p className="text-6xl font-dancing-script text-white mb-2">
            Let Me Distract You By,
          </p>
          <p className="text-8xl font-bebas text-white mb-4">
            PRIVIBE
          </p>
          <button onClick={() => scrollToElement(CollectionRef)} className="bg-white text-pink-600 text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
            Explore Collection
          </button>
        </div>
        <div className="flex items-center lg:w-1/2 mt-6 lg:mt-0 space-x-4">
          <div className="w-56 bg-white shadow-lg overflow-hidden">
            <div className="flex justify-center items-center pt-3">
              <img src="/images/show3.jpg" className="w-44 h-44 object-cover" alt="Traditional Jewel" />
            </div>
            <div className="pr-4 pl-4 text-center">
              <p className="text-xl font-cursive text-gray-800">Traditional</p>
            </div>
          </div>
          <div className="w-56 bg-white shadow-lg overflow-hidden">
            <div className="flex justify-center items-center pt-3">
              <img src="/images/show4.jpg" className="w-44 h-44 object-cover" alt="Western Jewel" />
            </div>
            <div className="pr-4 pl-4 text-center">
              <p className="text-xl font-cursive text-gray-800">Western</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
