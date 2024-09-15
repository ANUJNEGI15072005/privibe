import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from './authUtilis'; 
import Cookies from 'js-cookie';

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return toast.error('Email and password are required', {
        style: {
          backgroundColor: '#f56565',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          padding: '12px',
        },
        progressStyle: {
          backgroundColor: '#fbbf24',
        },
      });
    }

    try {
      const { success, message } = await loginUser(loginInfo);
      if (success) {
        toast.success(message, {
          style: {
            backgroundColor: '#6b46c1',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '12px',
          },
          progressStyle: {
            backgroundColor: '#48bb78',
          },
        });
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        toast.error(message, {
          style: {
            backgroundColor: '#f56565',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '12px',
          },
          progressStyle: {
            backgroundColor: '#fbbf24',
          },
        });
      }
    } catch (err) {
      toast.error(err.message, {
        style: {
          backgroundColor: '#f56565',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          padding: '12px',
        },
        progressStyle: {
          backgroundColor: '#fbbf24',
        },
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-700">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={loginInfo.email}
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
              value={loginInfo.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Login
          </button>
          <span className="block text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-600 hover:underline">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
