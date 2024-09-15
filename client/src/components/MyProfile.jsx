import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); 

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setName(Cookies.get('name') || '');
      setEmail(Cookies.get('email') || '');
      setPhone(Cookies.get('phone') || '');
      setAddress(Cookies.get('address') || '');
    } else {

    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') setPhone(value);
    if (name === 'address') setAddress(value);
  };

  const handleSave = () => {
    const token = Cookies.get('token');
    
    if (!token) {
      console.error('No token found!');
      return;
    }
  
    const profileData = { phone, address };
  
    console.log('Token:', token);
    console.log('Profile data to save:', profileData);
  
    fetch('http://localhost:8080/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
      body: JSON.stringify(profileData),
    })
      .then((response) => {
        console.log('Response status:', response.status);
  
        if (!response.ok) {
          throw new Error('Error saving profile: ' + response.statusText);
        }
  
        return response.json();
      })
      .then((data) => {
        console.log('Response data:', data);
  
        if (data.message) {
          Cookies.set('phone', phone);
          Cookies.set('address', address);
          setSuccessMessage('Profile saved successfully!');
          setTimeout(() => setSuccessMessage(''), 3000);
        } else {
          alert('Unexpected response from server');
        }
      })
      .catch((error) => {
        console.error('Error saving profile:', error);
      });
  };
    

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('name');
    Cookies.remove('email');
    Cookies.remove('phone');
    Cookies.remove('address');
    window.location.reload();
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200 p-4">
        <ul>
          <li
            className={`p-2 cursor-pointer ${activeTab === 'personal' ? 'bg-purple-600 text-white' : ''
              }`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Detail
          </li>
          <li
            className="p-2 cursor-pointer text-red-500"
            onClick={() => setShowLogoutPopup(true)}
          >
            Log Out
          </li>
        </ul>
      </div>

      <div className="w-3/4 p-8">
        {activeTab === 'personal' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Personal Detail</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-lg font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  readOnly 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-lg font-medium mb-1">Address</label>
                <textarea
                  name="address"
                  value={address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 focus:outline-none"
              >
                Save
              </button>
            </form>

            {successMessage && (
              <div className="mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded-md">
                {successMessage}
              </div>
            )}
          </div>
        )}
      </div>

      {showLogoutPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Are you sure you want to log out?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowLogoutPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
