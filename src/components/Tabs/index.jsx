import { Tab } from "@headlessui/react";
import Card from "../Card";
import NoData from "../NoData";
import { useState } from "react";
import Modal from "../Modal";
import ModalComponent from "./ModalAddEdit";
import { BsPencil } from "react-icons/bs";
import useTodo from "../../hooks/useTodo";
import cogoToast from "cogo-toast";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ data }) {
  const { createNewTodo, deleteTodo, editTodo } = useTodo();
  const [modal, setModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [isCreate, setIsCreate] = useState(true);
  const [cantDelete, setCantDelete] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const val = e.target.value;
    setSelectedData((old) => ({ ...old, [key]: val }));
  };

  const handleEdit = (swichComplete) => {
    editTodo(selectedData.id, selectedData);

    setModal(false);
    setSelectedData(null);
    cogoToast.success("Berhasil Edit Todo");
  };

  const handleDelete = () => {
    deleteTodo(selectedData.id);
    cogoToast.success("Berhasil Hapus Todo");
    setModal(false);
    setSelectedData(null);
  };

  const handleOnCreate = () => {
    if (!selectedData) {
      alert("data tidak boleh kosong");
      return;
    }
    createNewTodo(selectedData);
    setModal(false);
    setSelectedData(null);
  };

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl bg-gray-100">
          {data?.data &&
            Object.keys(data?.data).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium text-secondaryColor rounded-lg",
                    "focus:outline-none focus:ring-0",
                    selected
                      ? "bg-white shadow"
                      : "text-secondaryColor hover:bg-white/[0.12]"
                  )
                }
              >
                {category}
              </Tab>
            ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <div className="flex justify-end py-3">
            <button
              className="ml-2 bg-white flex justify-between hover:text-mainbg transition hover:border-mainbg items-center text-sm font-medium text-mainbg py-1.5 px-3 border rounded-full"
              onClick={() => {
                setModal(true);
                setIsCreate(true);
              }}
            >
              Create Todo
              <span>
                <BsPencil className="ml-2 text-sm" />
              </span>
            </button>
          </div>
          {data?.data &&
            Object.values(data?.data).map((posts, idx) => (
              <Tab.Panel key={idx}>
                {posts.length > 0 ? (
                  posts.map((post, inx) => (
                    <Card
                      key={inx}
                      data={post}
                      onDetail={() => {
                        setIsCreate(false);
                        setModal(true);
                        setSelectedData(post);
                        setCantDelete(post.status === 1 ? true : false);
                      }}
                    />
                  ))
                ) : (
                  <NoData />
                )}
              </Tab.Panel>
            ))}
        </Tab.Panels>
      </Tab.Group>
      <Modal
        isOpen={modal}
        handleClose={() => {
          setModal(false);
          setSelectedData(null);
        }}
        component={
          <ModalComponent
            data={selectedData}
            onChange={handleChange}
            onDelete={handleDelete}
            onEdit={(val) => handleEdit(val)}
            isCreate={isCreate}
            onCreate={handleOnCreate}
            cantDelete={cantDelete}
          />
        }
      />
    </div>
  );
}
