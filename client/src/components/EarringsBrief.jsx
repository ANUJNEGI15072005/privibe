import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useManifest } from '../context/ManifestContext';

const EarringsBrief = ({ data }) => {
  const [color, setColor] = useState(false); // Toggle heart color
  const [message, setMessage] = useState(''); // Message to show after add/remove
  const [visible, setVisible] = useState(false); // Visibility of the message
  const { manifestList, addToManifest, removeFromManifest } = useManifest();

  useEffect(() => {
    setColor(manifestList.some(item => item.id === data.id));
  }, [data.id, manifestList]);

  const handleAddToList = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    try {
      const apiBaseUrl = '/api/manifest';
      const name = localStorage.getItem('name'); // Ensure this is the correct user ID

      if (!name) {
        throw new Error('User not logged in');
      }

      console.log('Item data being sent:', data); // Log the data being sent

      if (color) {
        const response = await fetch(`${apiBaseUrl}/remove`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ itemId: data.id, name }), // Include name here
        });

        const result = await response.json();
        console.log('Remove result:', result);
        removeFromManifest(data.id); // Update the local manifest
      } else {
        const response = await fetch(`${apiBaseUrl}/add`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ item: data, name }), // Include name here
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to add item: ${errorData.error}`);
        }

        const result = await response.json();
        console.log('Add result:', result);
        addToManifest(data); // Update the local manifest
      }

      setColor(!color);
      setMessage(!color ? 'Added to Manifest List' : 'Removed from Manifest List');
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 3000);
    } catch (error) {
      console.error('Error in updating manifest list:', error);
      setMessage(`Error: ${error.message}`);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  };
  return (
    <>
      <Link
        to={`/Earrings/${data.id}`}
        className='p-4 w-72 h-80 mb-5 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'
      >
        <div className='relative w-full h-60'>
          {data.image ? (
            <img
              src={data.image}
              alt={data.title}
              className='w-full h-full object-cover transition-opacity duration-300 hover:opacity-80'
            />
          ) : (
            <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
              <p className='text-gray-500'>No Image Available</p>
            </div>
          )}
          <FaHeart
            className={`absolute top-2 right-2 text-3xl cursor-pointer transition-transform transform ${color ? 'text-red-500 scale-110' : 'text-gray-300'
              }`}
            onClick={handleAddToList} // Call the function on heart icon click
          />
        </div>
        <div className='flex flex-col px-4 py-2'>
          <p className='text-lg font-semibold text-gray-800'>{data.title}</p>
          <p className='text-xl font-bold text-gray-900'>{data.price}</p>
        </div>
      </Link>
      {message && (
        <div
          className={`p-3 z-30 fixed right-8 bottom-8 border-2 border-gray-700 bg-gray-900 text-white font-semibold rounded-lg shadow-lg transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {message}
        </div>
      )}
    </>
  );
};

export default EarringsBrief;
