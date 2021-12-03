import React from "react";
import { dateFormatter } from "../../lib/DateFormatter";

const Card = ({ data, onDetail }) => {
  return (
    <div
      className="bg-white rounded-md shadow-md px-7 py-4 mt-2 cursor-pointer hover:bg-gray-200 flex justify-between items-center"
      onClick={onDetail}
    >
      <div className="font-medium text-gray-800">{data.title}</div>
      <div className="text-gray-600 text-sm">
        {dateFormatter(data.createdAt)}
      </div>
    </div>
  );
};

export default Card;
