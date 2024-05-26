import React from 'react';
import Group4 from '../assets/Group 4.png';
import './login.js';
import './signup-login.css';

const SignUp = () => {
    return (
        <div className="flex min-h-screen">
            {/* Image Section */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center">
                <img src={Group4} alt="Log in" className="w-full h-full object-contain" />
            </div>

            {/* Form Section */}
            <div className="flex flex-col justify-center items-center md:w-1/2 w-full p-2 bg-white">
                <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
                <form className="w-full max-w-md">
                    <div className="mb-8"> {/* Increased margin-bottom for the "Username" label */}
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
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
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="********"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-20">
                        <p className="text-sm text-gray-600"><a href="./login">Already have an account?</a></p>
                        <button
                            className="#EF476F py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
