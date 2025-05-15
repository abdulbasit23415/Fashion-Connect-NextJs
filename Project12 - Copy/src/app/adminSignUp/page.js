"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FormPage from "@/components/FormPage";
import { FiUser, FiHelpCircle } from "react-icons/fi";
import { MdOutlineEmail, MdOutlinePassword } from "react-icons/md";
import { FaIdCard, FaWarehouse } from "react-icons/fa";

const AdminSignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
    cnic: "",
    bankAccount: "",
    warehouseAddress: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const nextPage = () => {
    if (currentPage < 4) setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const formFields = [
    [
      { type: "text", name: "username", placeholder: "Username", icon: FiUser, value: formData.username },
      { type: "email", name: "email", placeholder: "example@email.com", icon: MdOutlineEmail, value: formData.email },
      { type: "text", name: "phone", placeholder: "Phone No", icon: FiUser, value: formData.phone },
    ],
    [
      { type: "password", name: "password", placeholder: "Password", icon: MdOutlinePassword, value: formData.password },
      { type: "password", name: "confirmPassword", placeholder: "Confirm Password", icon: MdOutlinePassword, value: formData.confirmPassword },
    ],
    [
      { type: "text", name: "otp", placeholder: "Enter OTP", icon: FiUser, value: formData.otp },
    ],
    [
      { type: "text", name: "cnic", placeholder: "CNIC", icon: FaIdCard, value: formData.cnic },
      { type: "text", name: "bankAccount", placeholder: "Bank Account", icon: FaIdCard, value: formData.bankAccount },
      { type: "text", name: "warehouseAddress", placeholder: "Warehouse Address", icon: FaWarehouse, value: formData.warehouseAddress },
    ],
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-pink-300 to-purple-400 flex flex-col justify-center items-center text-white w-1/4">
        <Image src="/images/All in one.png" alt="Logo" width={200} height={400} priority loading="eager" />
        <Image src="/images/signupAdminPageHandshake.png" alt="Handshake" width={400} height={300} priority loading="eager" />
        <h2 className="text-3xl font-semibold text-center -mt-20">Services for Business Growth</h2>
      </div>

      {/* Sign-Up Form */}
      <div className="w-3/4 flex flex-col justify-center items-center bg-white relative min-h-screen transition-all duration-500">
        <Link href="/login" className="absolute top-4 left-4 text-gray-600 pt-5">&larr; Return Back</Link>
        <Link href="/" className="absolute top-4 right-4 text-gray-600 pt-5">
          Already a Seller? <b className="text-black">LOG IN NOW</b>
        </Link>

        <h2 className="text-3xl text-black font-bold mb-6">Sign Up</h2>
        <p className="text-sm text-gray-500 mb-8">SIGN UP AND JOIN THE NETWORK</p>

        <div className="w-96 text-black">
        <FormPage
            fields={formFields[currentPage - 1]}
            onChange={handleChange}
            onSubmit={nextPage}
            buttonText={currentPage === 4 ? "Finish" : "Next"}
            currentPage={currentPage}
            nextPage={nextPage}
            previousPage={previousPage}          
        />
        </div>

        <footer className="absolute bottom-4 flex justify-between w-full px-6 text-gray-500 text-xs pb-5">
          <span>Copyright 2021 - 2022 FoxHub Inc. All rights Reserved</span>
          <a href="#" className="flex items-center gap-1 hover:text-gray-700">
            <FiHelpCircle className="text-lg" /> Need help?
          </a>
        </footer>
      </div>
    </div>
  );
};

export default AdminSignUp;
