import React from "react";

const NoData = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 py-8 bg-white rounded-md shadow-md">
        <span className="mr-4 font-semibold text-subtitle">
          Belum ada Todo List
        </span>
        <img className="w-2/6" src="/notfound.svg" alt="no data found" />
      </div>
    </div>
  );
};

export default NoData;
