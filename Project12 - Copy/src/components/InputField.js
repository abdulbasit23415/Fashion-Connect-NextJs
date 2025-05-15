// components/InputField.jsx
import React from 'react';

const InputField = ({ type, name, placeholder, icon: Icon, value, onChange }) => {
  return (
    <div className="relative flex items-center border px-4 py-4 mb-6">
      {Icon && <Icon className="text-gray-600 text-lg" />}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-3 focus:outline-none text-black"
      />
    </div>
  );
};

export default InputField;
