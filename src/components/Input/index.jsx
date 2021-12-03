import React from "react";

const Input = ({ value, onChange, label, subLabel, name }) => {
  return (
    <div>
      <div className="mb-3 pt-0 flex flex-col">
        {label && (
          <label className="text-sm font-medium text-subtitle">{label}</label>
        )}
        <input
          type="text"
          className="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
          style={{ width: 330 }}
          onChange={onChange}
          value={value}
          name={name}
        />
        {subLabel && <p className="text-xs text-gray-400 mt-1">{subLabel}</p>}
      </div>
    </div>
  );
};

export default Input;
