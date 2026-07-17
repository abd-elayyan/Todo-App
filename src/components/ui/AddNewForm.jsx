"use client";
import { useAddForm } from "@/hooks/useAddForm";
import { Button } from "./Buttotn";
import { useTodos } from "@/hooks/useTodos";

export const AddNewForm = ({ onClick }) => {
  const { formData, setFormData } = useAddForm();
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const { addTodo, todos } = useTodos();
  const handelSubmit = (e) => {
    e.preventDefault();
    onClick();
    addTodo(formData);
    console.log("form add new form : ", todos);
  };
  // const {showForm,setShowForm} =
  const priorites = [
    { label: "Low priority", value: "low" },
    { label: "Mediom priority", value: "mediom" },
    { label: "High priority", value: "high" },
  ];

  const categories = [
    { label: "Work", value: "work" },
    { label: "Personal", value: "personal" },
    { label: "General", value: "general" },
  ];

  return (
    <div className="bg-white/90 px-10 py-10 rounded-2xl shadow-2xl    max-w-lg w-full">
      {/* form header */}
      <div className="flex flex-row justify-between items-center w-full text-xl font-bold">
        <h1 className="text-gray-800">Add New Task</h1>
        <button
          onClick={onClick}
          className="cursor-pointer text-gray-400 hover:scale-110 hover:text-red-600"
        >
          X
        </button>
      </div>

      {/* task title  */}
      <div className="my-4 ">
        <label htmlFor="title" className="block mb-2 font-bold text-gray-800">
          Task title *
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Task Title"
          required
          value={formData.title}
          onChange={handelChange}
          className="py-3 w-full rounded-xl focus:outline-none  focus:border-indigo-600 border-2 border-gray-400  placeholder:text-gray-500 duration-300 placeholder:text-lg placeholder:px-2 "
        />
      </div>

      {/* task discription  */}
      <div className="my-4">
        <label
          htmlFor="description"
          className="block mb-2 font-bold text-gray-800"
        >
          Task Description
        </label>
        <textarea
          required
          rows={3}
          value={formData.description}
          onChange={handelChange}
          name="description"
          id="description"
          placeholder="Enter Task description"
          className="py-3 w-full rounded-xl focus:outline-none  focus:border-indigo-600 border-2 border-gray-400  placeholder:text-gray-500 placeholder:text-lg placeholder:px-2 duration-300"
        />
      </div>

      {/* priority and category */}
      <div className="flex gap-4">
        {/* priority */}
        <div>
          <label
            htmlFor="priority"
            className="block mb-2 font-bold text-gray-800"
          >
            Priority
          </label>
          <select
            value={formData.priority}
            onChange={handelChange}
            name="priority"
            id="priority"
            className="py-2 px-2 my-1 w-full border-2 border-gray-400 rounded-xl text-gray-500 font-medium focus:text-gray-800 focus:outline-none focus:border-indigo-600 duration-300 "
          >
            {priorites &&
              priorites.map((p) => {
                return (
                  <option key={p.value} value={p.value} className="">
                    {p.label}
                  </option>
                );
              })}
          </select>
        </div>
        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block mb-2 font-bold text-gray-800"
          >
            Category
          </label>
          <select
            value={formData.category}
            onChange={handelChange}
            name="category"
            id="category"
            className="duration-300 py-2 px-2 my-1 w-full border-2 border-gray-400 rounded-xl text-gray-500 font-medium focus:text-gray-800 focus:outline-none focus:border-indigo-600"
          >
            {categories &&
              categories.map((p) => {
                return (
                  <option key={p.value} value={p.value} className="">
                    {p.label}
                  </option>
                );
              })}
          </select>
        </div>
      </div>

      {/* date */}
      <div className="my-2">
        <label htmlFor="dueDate" className="block mb-2 font-bold text-gray-800">
          Date
        </label>
        <input
          type="date"
          name="dueDate"
          id="dueDate"
          value={formData.dueDate}
          onChange={handelChange}
          className="border-2 border-gray-400 py-3 w-full my-1 text-gray-400 rounded-xl px-3 focus:border-indigo-700 outline-none duration-300"
        />
      </div>

      {/* buttons */}
      <div className="flex w-sm mx-auto mt-5 gap-5 ">
        <Button
          title={"Add Task"}
          type={"primary"}
          className={"w-full "}
          onClick={handelSubmit}
        />
        <Button
          title={"Cancel"}
          type={"secondary"}
          className={"w-full "}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
