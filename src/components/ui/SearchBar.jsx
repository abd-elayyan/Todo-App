import { useTodos } from "@/hooks/useTodos";

export const SearchBar = () => {
  const { filter, setFilter, state, setSearchQuery, sortBy, setSortBy } =
    useTodos();
  const filters = [
    { count: state.total, label: "All Tasks", value: "all" },
    { count: state.completed, label: "Completed", value: "completed" },
    { count: state.active, label: "Active", value: "active" },
  ];

  const sortOptoin = [
    { label: "Date Created", value: "created", selected: false },
    { label: "Priority", value: "priority", selected: false },
    { label: "Title", value: "title", selected: true },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    // search bar
    <div className="bg-white/90 border-2 border-gray-300 shadow-2xl my-3 p-5 rounded-2xl">
      <input
        type="text "
        className="w-full border-gray-400 border-2 p-2 placeholder:text-gray-400 rounded-xl focus:outline-none focus:border-indigo-500  hover:border-gray-700 duration-200"
        placeholder="Search for a task "
        onChange={handleSearchChange}
      />

      {/* filter & sort section  */}
      <div className="flex justify-between items-center">
        {/* filter section  */}
        <div className="flex gap-5 mt-3 border shadow-xl py-2 px-2 max-w-md text-sm w-full border-gray-300 rounded-lg">
          {filters &&
            filters.map((f) => (
              <button
                key={f.value}
                value={f.value}
                onClick={() => setFilter(f.value)}
                className={` px-3 py-2 rounded-lg  font-bold text-sm text-gray-500  cursor-pointer w-full hover:-translate-y-1 duration-300 ${filter === f.value ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white/90" : " hover:bg-indigo-100 hover:text-indigo-500 "}`}
              >
                {f.label}
                <span
                  className={`px-2 py-1 ml-1 text-gray-600  rounded-full ${filter === f.value ? "bg-white/20 text-white/90" : ""}`}
                >
                  {f.count}
                </span>
              </button>
            ))}
        </div>

        {/* sort section  */}
        <div>
          <label htmlFor="sort">Sort by :</label>
          <select
            name="sort"
            id="sort"
            value={sortBy}
            className="border-2 border-gray-300 rounded-lg hover:scale-none hover:outline-none hover:border-indigo-400 px-2 py-1 text-gray-500 text-sm ml-2"
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            {sortOptoin &&
              sortOptoin.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};
