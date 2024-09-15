import React, { useState, useEffect} from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useManifest } from '../context/ManifestContext';

const NeckpieceBrief = ({ data }) => {
  const [color, setColor] = useState(false);
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const { manifestList, addToManifest, removeFromManifest } = useManifest();

  useEffect(() => {
    setColor(manifestList.some(item => item.id === data.id));
  }, [data.id, manifestList]);

  const handleAddToList = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (color) {
      removeFromManifest(data.id);
    } else {
      addToManifest(data);
    }
    setColor(!color);
    setMessage(!color ? 'Added to Manifest List' : 'Removed from Manifest List');
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  return (
    <>
      <Link to={`/Neckpiece/${data.id}`} className='p-4 w-72 h-80 mb-5 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
        <div className='relative w-full h-60'>
          <img src={data.image} alt="Neckpiece" className='w-full h-full object-cover transition-opacity duration-300 hover:opacity-80' />
          <FaHeart 
            className={`absolute top-2 right-2 text-3xl cursor-pointer transition-transform transform ${color ? 'text-red-500 scale-110' : 'text-gray-300'}`} 
            onClick={handleAddToList} 
          />
        </div>
        <div className='flex flex-col px-4 py-2'>
          <p className='text-lg font-semibold text-gray-800'>{data.title}</p>
          <p className='text-xl font-bold text-gray-900'>{data.price}</p>
        </div>
      </Link>
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

export default NeckpieceBrief;
