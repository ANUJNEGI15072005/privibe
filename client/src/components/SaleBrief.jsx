import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const SaleBrief = ({ data }) => {
  const [color, setColor] = useState(false);
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const AddToList = () => {
    setColor(!color);
    setMessage(!color ? 'Added to Manifest List' : 'Removed from Manifest List');
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  return (
    <>
      <div className='p-4 w-72 h-80 mb-5 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
        <div className='relative w-full h-60'>
          <img src={data.image} alt="Sale Item" className='w-full h-full object-cover transition-opacity duration-300 hover:opacity-80' />
          <FaHeart 
            className={`absolute top-2 right-2 text-3xl cursor-pointer transition-transform transform ${color ? 'text-red-500 scale-110' : 'text-gray-300'}`} 
            onClick={AddToList} 
          />
        </div>
        <div className='flex flex-col px-4 py-2'>
          <p className='text-lg font-semibold text-gray-800'>{data.title}</p>
          <p className='text-xl font-bold text-gray-900'>{data.price}</p>
        </div>
      </div>
      {message && (
        <div 
          className={`p-3 z-30 fixed right-8 bottom-8 border-2 border-gray-700 bg-gray-900 text-white font-semibold rounded-lg shadow-lg transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {message}
        </div>
      )}
    </>
  );
}

export default SaleBrief;
