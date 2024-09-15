import React, { useEffect, useState } from 'react';
import { useManifest } from '../context/ManifestContext';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ManifestList = ({ userId }) => {
  const { manifestList, setManifestList, removeFromManifest } = useManifest();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch manifest list for the specific user
  useEffect(() => {
    const fetchManifestList = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/manifest/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch manifest');
        }
        const data = await response.json();
        setManifestList(data);
      } catch (error) {
        setError('Failed to fetch manifest list');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchManifestList();
  }, [setManifestList, userId]);

  // Save manifest list to backend
  const saveManifestList = async (newManifestList) => {
    try {
      await fetch('/api/manifest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, manifestList: newManifestList }),
      });
    } catch (error) {
      console.error('Failed to save manifest list:', error);
    }
  };

  // Handle add to manifest
  const handleAddToManifest = (item) => {
    const newList = [...manifestList, item];
    setManifestList(newList);
    saveManifestList(newList); // Save the list
  };

  // Handle remove from manifest
  const handleRemoveFromManifest = (itemId) => {
    const newList = manifestList.filter((item) => item.id !== itemId);
    setManifestList(newList);
    saveManifestList(newList); // Save the updated list
  };

  // Handle navigation to item detail
  const handleNavigate = (item) => {
    let path = `/Earrings/${item.id}`;
    if (item.type === 'neckpiece') path = `/Neckpiece/${item.id}`;
    else if (item.type === 'bracelet') path = `/Bracelet/${item.id}`;
    navigate(path);
  };

  // Loading and error feedback
  if (loading) {
    return <div className='text-center py-6 text-xl'>Loading your manifest...</div>;
  }

  if (error) {
    return <div className='text-center py-6 text-xl text-red-500'>{error}</div>;
  }

  return (
    <div>
      <div className='h-28 bg-red-300 w-full'>
        <div className='flex h-24 px-7 justify-start items-center'>
          <h1 className='text-white font-cursive text-4xl md:text-6xl'>Manifest your jewelry here</h1>
        </div>
      </div>

      <div className='w-full flex justify-evenly items-center py-6'>
        <div className='w-full max-w-screen-lg flex flex-wrap gap-6 justify-center'>
          {manifestList.length > 0 ? (
            manifestList.map((item) => (
              <div
                key={item.id}
                className='p-4 w-80 h-[380px] mb-5 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer'
                onClick={() => handleNavigate(item)}
              >
                <div className='relative w-full h-72'>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-full object-cover transition-opacity duration-300 hover:opacity-80'
                    />
                  ) : (
                    <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
                      <p className='text-gray-500'>No Image Available</p>
                    </div>
                  )}
                </div>
                <div className='flex flex-col px-4 py-2'>
                  <p className='text-xl font-semibold text-gray-800'>{item.title}</p>
                  <p className='text-2xl font-bold text-gray-900'>{item.price}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromManifest(item.id);
                    }}
                    className='absolute bottom-6 right-6 ml-4 text-red-500 hover:text-red-700'
                  >
                    <FaTrashAlt size={23} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className='flex justify-center items-center w-full'>
              <p className='text-xl'>No items in the manifest list.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManifestList;
