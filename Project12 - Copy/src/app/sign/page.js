'use client'
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';

function Card() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className="min-h-screen flex bg-pink-300 relative">
      {/* Left Pink Side */}
      <div className="w-[60%] bg-pink-300 flex flex-col items-center justify-center relative">
        {/* Logo and Tagline */}
        <div className="absolute top-[80px] text-center">
          <img src="/images/Logo.png" alt="Fashion Connect Logo" className="w-auto h-[120px]" />
        </div>

        {/* Models */}
        <div className="absolute bottom-0 left-[200px]">
          <img src="/images/Page2.png" alt="Fashion Connect Models" className="w-auto h-[350px]" />
        </div>
      </div>

      {/* Right White Side */}
      <div className="w-[40%] bg-white rounded-l-[100px] flex items-center justify-center p-10 shadow-xl">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          
          <div className="space-y-4">
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" />
            <input type="text" placeholder="Username" className="w-full p-3 border border-gray-300 rounded" />
            <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded" />
            
            <button className="w-full bg-gradient-to-r from-pink-600 to-purple-500 text-white py-3 rounded mt-4 transition-transform hover:scale-105">CREATE A NEW ACCOUNT</button>
          </div>

          <div className="text-center text-gray-600 mt-4">
            Already have an account? <Link href="../" className="text-blue-500">Log in</Link>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login Button */}
          <button 
            onClick={handleModalOpen}
            className="w-full flex items-center justify-center bg-white border border-gray-300 py-2 rounded shadow-sm mb-2 transition-transform hover:scale-105"
          >
            <FcGoogle className="mr-2" /> Log in with Google
          </button>

          {/* Facebook Login Button */}
          <button 
            onClick={handleModalOpen}
            className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded shadow-sm transition-transform hover:scale-105"
          >
            <FaFacebookF className="mr-2" /> Log in with Facebook
          </button>
        </div>
      </div>

      {/* Coming Soon Modal */}
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
  )
}

export default Card;
