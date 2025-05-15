// components/FormPage.jsx
import React from 'react';
import InputField from './InputField';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa";

const FormPage = ({ fields, onChange, onSubmit, buttonText, currentPage, nextPage, previousPage }) => {
  return (
    <div className="w-96 text-black">
      {fields.map((field, index) => (
        <InputField
          key={index}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          icon={field.icon}
          value={field.value}
          onChange={onChange}
        />
      ))}

      {/* Navigation Button Section */}
      <div className="w-full mt-6 flex justify-between">
        {currentPage > 1 && (
        <button
        className="w-1/2 bg-gray-900 text-white py-4 mt-4 flex items-center justify-between px-6 hover:bg-gray-600 transition-all duration-300"
        onClick={previousPage}
        >
            <FaArrowLeft className="text-white text-lg" />
            <span>Back</span>
        
        </button>
        )}

        <button
            className={` bg-gray-900 text-white py-4 mt-4 flex items-center justify-between px-6 hover:bg-gray-800 transition-all duration-300 ${currentPage > 1 ? "w-1/2 ml-4" : "w-full"}`}
            onClick={nextPage}
        >
        <span>{currentPage === 4 ? "Finish" : "Next"}</span>
        <FaArrowRight className="text-white text-lg justify-end items-center" />
        </button>
        </div>


      {/* <button
        onClick={onSubmit}
        className="w-full bg-gray-900 text-white py-4 mt-4 flex items-center justify-between px-6 hover:bg-gray-800"
      > 
        <span>{buttonText}</span>
        <FaArrowRight className="text-white text-lg" />
      </button> */}
    </div>
  );
};

export default FormPage;
