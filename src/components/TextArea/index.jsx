import React from "react";

const TextArea = ({ value, onChange, label, name }) => {
  return (
    <div>
      <div className="flex flex-col mt-4">
        <label className="text-sm font-medium text-subtitle">{label}</label>
        <div>
          <textarea
            className=" p-2 mt-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-md text-sm outline-none focus:border-gray-300 focus:outline-none focus:ring-0 border-2 border-gray-200 w-full"
            rows="4"
            onChange={onChange}
            name={name}
            value={value}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
