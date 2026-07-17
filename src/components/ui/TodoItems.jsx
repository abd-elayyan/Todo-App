import { useTodos } from "@/hooks/useTodos";

export const TodoItems = ({ todo }) => {
  const { ToggelTodo, deleteTodo } = useTodos();

  const categoryColor = (ctg) => {
    switch (ctg?.toLowerCase()) {
      case "general":
        return " bg-gray-500 ";
      case "work":
        return " bg-blue-500 ";
      case "personal":
        return "  bg-cyan-500 ";
      default:
        return " bg-gray-500 ";
    }
  };

  const priorityColor = (pri) => {
    switch (pri?.toLowerCase()) {
      case "low":
        return " bg-emerald-500 ";
      case "mediom":
        return " bg-yellow-500 ";
      case "high":
        return "  bg-red-500 ";
      default:
        return " bg-emerald-500 ";
    }
  };

  const isOverdue =
    !todo.completed && todo.dueDate && new Date(todo.dueDate) < new Date();

  const handleDelete = () => {
    if (window.confirm("Are u sure u want to delete this shit ?"))
      deleteTodo(todo.id);
  };

  return (
    <div
      className="bg-white/90  p-5 rounded-xl shadow-2xl duration-300 hover:-translate-y-1 flex justify-between mb-3
    
    "
    >
      {/* check box & todo info */}
      <div className="flex gap-5 ">
        {/* check box  */}
        <button
          className={` self-start cursor-pointer w-6 h-6 p-2 mt-1 border-2 border-gray-400 rounded-md flex items-center justify-center hover:scale-110 duration-300  text-white/90 hover:border-indigo-600 relative text-center text-xs ${todo.completed ? "bg-linear-to-r from-green-500 to-emerald-500" : ""} `}
          onClick={() => {
            ToggelTodo(todo.id);
          }}
        >
          {todo.completed && "✓"}
        </button>

        {/* todo info */}
        <div>
          {/* title */}
          <div
            className={`self-start font-bold text-2xl text-gray-600 ${todo.completed ? "line-through" : ""}`}
          >
            {todo.title}
          </div>
          {/* description */}
          <div className={`font-medium text-md py-2 text-gray-400 `}>
            {todo.description}
          </div>
          {/* priority & date &category */}
          <div className="flex gap-4">
            {/* priority */}
            <div
              className={`${priorityColor(todo.priority)} border-0 rounded-full px-3 py-1 `}
            >
              {todo.priority}
            </div>
            {/* category */}
            <div
              className={`${categoryColor(todo.category)} border-0 rounded-full px-3 py-1 `}
            >
              {todo.category}
            </div>
            {/* date  */}
            <div
              className={`${isOverdue ? " text-red-600 " : "text-gray-400"} rounded-full px-3 py-1`}
            >
              {todo.dueDate}
            </div>
          </div>
        </div>
      </div>
      {/* CTA buttons */}
      <div className="flex gap-3 self-start">
        <button
          onClick={handleDelete}
          className="text-lg hover:text-red-600 hover:scale-105 hover:-translate-y-1 duration-200 font-bold cursor-pointer"
        >
          ✕
        </button>
        <div>edit</div>
      </div>
    </div>
  );
};
