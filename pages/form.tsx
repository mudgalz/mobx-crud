import { store } from "@/store";
import { observer } from "mobx-react";
import Link from "next/link";
import { useRef } from "react";

const form = observer(() => {
  const formRef = useRef<any | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { title, description, status } = formRef.current;
    const formValues = {
      id: Math.random().toString(36).slice(2, 8),
      title: title.value,
      description: description.value,
      status: status.value,
    };

    store.createTask(formValues);
    formRef.current.reset();
    alert("Task Added Successfully!");
  }

  return (
    <div className="px-4 md:px-0">
      <div className="items-start justify-between md:flex mt-10 max-w-4xl mx-auto md:mt-20">
        <div>
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Tasks Listing</h3>
        </div>
        <div className="mt-3 md:mt-0">
          <Link href="/" className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm shadow">
            Task Listing
          </Link>
        </div>
      </div>
      <section className="max-w-4xl mt-10 p-6 mx-auto bg-white/90 rounded-md shadow-md">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 text-left mt-6 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="title">
                Title
              </label>
              <input id="title" name="title" required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="text-gray-700" htmlFor="status">
                Status
              </label>
              <select className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" name="status" id="status">
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="desc">
                Description
              </label>
              <textarea id="desc" name="description" required className="block w-full placeholder:text-sm px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 active:scale-95 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add</button>
          </div>
        </form>
        <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-sky-400 via-fuchsia-300 to-transparent -z-20 opacity-60" />
      </section>
    </div>
  );
});
export default form;
