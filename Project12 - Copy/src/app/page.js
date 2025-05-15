'use client'
import React, { useState } from 'react';
import { FaGoogle, FaApple, FaGooglePlay } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { users } from '@/app/data';

const FashionConnectLoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: false, password: false });
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === formData.username && u.password === formData.password
    );

    if (user) {
      alert("Login Successful!");
      setFormData({ username: '', password: '' });
      setErrors({ username: false, password: false });
      router.push('/homepage');
    } else {
      setErrors({ username: true, password: true });
      setErrorMessage("Incorrect Username or Password.");
    }
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
  

      {/* Left Pink Side */}
      <div className="w-full md:w-[60%] bg-pink-300 flex items-center justify-center py-10 md:py-0">
        <div className="text-center">
          <img className="w-auto h-[80px] md:h-[120px] mt-[20px] md:mt-[100px]" src="./images/Logo.png" alt="Logo" />
          <img className="w-[250px] md:w-auto h-[250px] md:h-[320px] mt-10" src="./images/3 Person W.png" alt="Illustration" />
        </div>
      </div>

      {/* Right White Side */}
      <div className="w-full md:w-[40%] bg-white flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <img src="./images/Logo.png" className="w-[40%] md:w-[50%] h-auto mx-auto mb-4" alt="Logo" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="username"
              placeholder="Phone Number, Username, or Email"
              value={formData.username}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />

            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full mt-2 p-2 rounded-lg text-white bg-gradient-to-r from-pink-600 to-purple-500 transition transform hover:scale-105 hover:from-purple-600 hover:to-pink-500 hover:shadow-lg"
            >
              LOGIN
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <button 
            onClick={handleModalOpen}
            className="w-full p-2 flex items-center justify-center space-x-2 border border-gray-300 rounded-lg text-gray-700 transition transform hover:scale-105 hover:bg-red-500 hover:text-white hover:shadow-md"
          >
            <FaGoogle /> <span>Log in with Google</span>
          </button>

          <div className="text-center text-sm text-gray-500 space-y-1">
            <p>Forgot Password?</p>
            <p>
              Don’t have an account?{' '}
              <Link href="/login">
                <span className="text-pink-500 cursor-pointer hover:text-pink-600">Sign Up</span>
              </Link>
            </p>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-500 mb-2">Get the App.</p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={handleModalOpen}
                className="bg-black text-white p-2 flex items-center space-x-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-800 hover:text-gray-200 hover:shadow-md"
              >
                <FaApple /> <span>App Store</span>
              </button>

              <button 
                onClick={handleModalOpen}
                className="bg-white border border-gray-300 p-2 flex items-center space-x-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-600 hover:text-white hover:shadow-md"
              >
                <FaGooglePlay /> <span>Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center w-[300px] shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-pink-500">Coming Soon</h2>
            <p className="text-gray-600 mb-6">This feature will be available soon. Stay tuned!</p>
            <button 
              onClick={handleModalClose}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg transition hover:bg-pink-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FashionConnectLoginPage;
