// 'use client';

// import React, { useState, useEffect } from 'react';

// function ComingSoonPage() {
//   const [timeLeft, setTimeLeft] = useState({});
  
//   const calculateTimeLeft = () => {
//     const launchDate = new Date("2025-06-01");
//     const difference = launchDate - new Date();
//     let time = {};
    
//     if (difference > 0) {
//       time = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
//     return time;
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen text-center bg-gray-50 text-gray-800">
//       <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
//       <p className="text-lg mb-6">We're working hard to launch something amazing.</p>
//       {timeLeft?.days !== undefined && (
//         <div className="text-2xl font-semibold mb-6">
//           {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
//         </div>
//       )}
//       <div className="mb-4">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="px-4 py-2 rounded-l border border-gray-300 focus:outline-none"
//         />
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700">
//           Notify Me
//         </button>
//       </div>
//       <p className="text-sm text-gray-500 mt-2">We'll notify you once we're live!</p>
//     </div>
//   );
// }

// export default ComingSoonPage;






"use client";

import React, { useState, useEffect } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

function MoreSection() {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({});
  const launchDate = new Date("2025-06-01T00:00:00Z"); // Set your launch date here
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Email Subscription
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // You can handle email saving here, like sending to a server
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">We're Almost There!</h2>

        {/* Countdown Timer */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Launch Countdown</h3>
          <div className="flex justify-center mt-4 space-x-8">
            <div>
              <p className="text-lg">{timeLeft.days} Days</p>
            </div>
            <div>
              <p className="text-lg">{timeLeft.hours} Hours</p>
            </div>
            <div>
              <p className="text-lg">{timeLeft.minutes} Minutes</p>
            </div>
            <div>
              <p className="text-lg">{timeLeft.seconds} Seconds</p>
            </div>
          </div>
        </div>

        {/* Email Subscription */}
        {!submitted ? (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">Get Early Access</h3>
            <form onSubmit={handleSubmit} className="flex justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-l-md text-gray-800"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-md text-white"
              >
                Notify Me
              </button>
            </form>
          </div>
        ) : (
          <div className="mb-8">
            <p className="text-xl">Thank you for subscribing!</p>
          </div>
        )}

        {/* Social Media Links */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-pink-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl hover:text-blue-400" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl hover:text-blue-600" />
            </a>
            <a href="mailto:contact@example.com">
              <FaEnvelope className="text-3xl hover:text-yellow-500" />
            </a>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Our Progress</h3>
          <div className="w-full bg-gray-300 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
          </div>
          <p className="text-center mt-2">70% completed!</p>
        </div>

        {/* Call to Action */}
        <div>
          <a
            href="#"
            className="text-lg bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded-md"
          >
            Stay Updated
          </a>
        </div>
      </div>
    </div>
  );
}

export default MoreSection;
