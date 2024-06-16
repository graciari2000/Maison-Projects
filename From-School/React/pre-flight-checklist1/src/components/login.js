import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import Group4 from '../assets/Group 4.png';
import './signup-login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://greenvelvet.alwaysdata.net/pfc/login', {
        username,
        password,
      });
      const data = response.data;
      if (data.token) {
        localStorage.setItem('authToken', data.token);
        navigate('/'); // Redirect to the Dashboard after successful login
      } else {
        // Handle login error (e.g., display an error message)
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <img src={Group4} alt="Log in" className="w-full h-full object-contain" />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full p-2 bg-white">
        <h1 className="text-xl font-bold mb-6">Login</h1>
        <form
          className="w-full max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-20">
            <p className="text-sm text-gray-600"><a href="./login.js">Forgot your password?</a></p>
            <button
              className="py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 text-white"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="flex justify-center">
            <p className="text-sm text-gray-600"><a href="./signup">Don't have an account? Sign up!</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;