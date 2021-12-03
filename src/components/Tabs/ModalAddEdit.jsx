import React from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import { BsPencil, BsTrash } from "react-icons/bs";

const ModalComponent = ({
  data,
  onEdit,
  onDelete,
  onChange,
  isCreate,
  onCreate,
  cantDelete,
}) => {
  return (
    <div>
      <div className="px-10 py-6 bg-white max-w-max rounded-md">
        <h1 className="font-bold pt-4 text-xl text-center">
          {isCreate ? "Create" : "Detail"} Todo
        </h1>
        <div className="mt-4">
          <Input
            label="Title"
            value={data?.title}
            name="title"
            onChange={onChange}
          />
          <TextArea
            label="description"
            value={data?.description}
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="mt-3 border-t-2 border-gray-200 py-3 flex">
          <button
            className="ml-2 bg-mainbg flex justify-between hover:text-white transition hover:border-mainbg items-center text-sm font-medium text-white py-1.5 px-3 border rounded-full"
            onClick={isCreate ? onCreate : onEdit}
          >
            {isCreate ? "Create" : "Edit"} Todo
            <span>
              <BsPencil className="ml-2 text-sm" />
            </span>
          </button>
          {!isCreate && (
            <button
              className="ml-2 bg-mainbg flex justify-between hover:text-white transition hover:border-mainbg items-center text-sm font-medium text-white py-1.5 px-3 border rounded-full"
              onClick={() => onEdit(true)}
            >
              Set {cantDelete ? "Uncomplete" : "Complete"}
            </button>
          )}
          {!isCreate && !cantDelete && (
            <button
              className="ml-2 bg-danger flex justify-between hover:text-white transition hover:border-danger items-center text-sm font-medium text-white py-1.5 px-3 border rounded-full"
              onClick={onDelete}
            >
              Hapus Todo
              <span>
                <BsTrash className="ml-2 text-sm" />
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
