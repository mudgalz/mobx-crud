import { ITask, store } from "@/store";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import Link from "next/link";
import { useState } from "react";
import Modal from "../components/Modal";

const DisplayTable = observer(() => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState<ITask>({ id: "", title: "", status: "", description: "" });
  const storeData = Array.from(toJS(store.tasks).values());

  function handleEdit(item: ITask) {
    setShow(!show);
    setData(item);
  }

  function handleDelete(itemId: string) {
    store.deleteTask(itemId);
  }

  return (
    <div className="max-w-5xl w-full mt-10 md:mt-20 mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div>
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Tasks Listing</h3>
        </div>
        <div className="mt-3 md:mt-0">
          <Link href="/form" className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm shadow">
            Add Task
          </Link>
        </div>
      </div>
      <div className="mt-12 max-w-5xl bg-opacity-80 bg-white mx-auto shadow rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {storeData.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                <td className="text-righ px-6 whitespace-nowrap md:space-x-5">
                  <button onClick={() => handleEdit(item)} className="py-1.5 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-blue-50 rounded-lg">
                    Edit
                  </button>
                  <button onClick={() => (confirm("Are you sure you want to delete this item?") ? handleDelete(item.id) : null)} className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-red-50 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={show} setShow={setShow} data={data} />
      <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-sky-400 via-fuchsia-300 to-transparent -z-20 opacity-60" />
    </div>
  );
});
export default DisplayTable;
