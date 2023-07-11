import { ITask, store } from "@/store";
import { useEffect, useState } from "react";
interface ModalProps {
  show: boolean;
  setShow: (value: boolean) => void;
  data: ITask;
}

export default function Modal({ show, setShow, data }: ModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    status: "",
    description: "",
  });

  function handleClick() {
    setShow(!show);
  }

  useEffect(() => {
    setFormData(data);
  }, [show]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    store.updateTask(data.id, formData);
    setShow(false);
    alert("Task Updated Successfully");
  }

  return (
    <div className={`bg-gray-800/50 fixed fle items-center mx-auto w-full h-full inset-0 z-20 ease duration-200 ${show ? "opacity-100" : "opacity-0 invisible"}`}>
      <form onSubmit={handleSubmit} className={`max-w-3xl absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ease duration-300 bg-white p-5 rounded-lg shadow-lg ${show ? "scale-100" : "scale-90"}`}>
        <h2 className="text-2xl font-medium">Edit Task</h2>
        <div className="grid grid-cols-1 gap-6 text-left mt-6 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 " htmlFor="title">
              Title
            </label>
            <input id="title" name="title" required value={formData?.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="status">
              Status
            </label>
            <select value={formData?.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} id="status" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" name="status">
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="col-span-2">
            <label className="text-gray-700" htmlFor="desc">
              Description
            </label>
            <textarea id="desc" name="desc" required value={formData?.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="block w-full placeholder:text-sm px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
          </div>
        </div>

        <div className="flex justify-end mt-6 gap-5">
          <button className="px-8 active:scale-95 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Save</button>
          <button type="button" onClick={handleClick} className="px-8 active:scale-95 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
