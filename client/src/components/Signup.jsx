import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Ensure toast is imported here
import 'react-toastify/dist/ReactToastify.css'; // Import default styles for toast notifications

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return toast.error('Name, email, and password are required', {
        style: {
          backgroundColor: '#f56565', // Tailwind's red-400
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          padding: '12px',
        },
        progressStyle: {
          backgroundColor: '#fbbf24', // Tailwind's yellow-400
        },
      });
    }

    try {
      const url = 'http://localhost:8080/auth/signup';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupInfo),
      });
      
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        toast.success(message, {
          style: {
            backgroundColor: '#6b46c1', // Tailwind's purple-600
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '12px',
          },
          progressStyle: {
            backgroundColor: '#48bb78', // Tailwind's green-400
          },
        });

        // Redirect to login after 1 second
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        toast.error(error?.details[0]?.message || message, {
          style: {
            backgroundColor: '#f56565', // Tailwind's red-400
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '12px',
          },
          progressStyle: {
            backgroundColor: '#fbbf24', // Tailwind's yellow-400
          },
        });
      }
    } catch (err) {
      toast.error('Something went wrong!', {
        style: {
          backgroundColor: '#f56565', // Tailwind's red-400
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          padding: '12px',
        },
        progressStyle: {
          backgroundColor: '#fbbf24', // Tailwind's yellow-400
        },
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">Signup</h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-700">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name..."
              value={signupInfo.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-700">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={signupInfo.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium mb-2 text-gray-700">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={signupInfo.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Signup
          </button>
          <span className="block text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 hover:underline">Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
