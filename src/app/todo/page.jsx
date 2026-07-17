"use client";
import { AddNewForm } from "@/components/ui/AddNewForm";
import { Button } from "@/components/ui/Buttotn";
import EmptyMsg from "@/components/ui/EmptyMsg";
import { SearchBar } from "@/components/ui/SearchBar";
import { TodoItems } from "@/components/ui/TodoItems";
import { useTodos } from "@/hooks/useTodos";
import { useState } from "react";

const TodoPage = () => {
  const [showForm, setShowForm] = useState(false);
  const { todos, filter, searchQuery, sortBy, setSortBy } = useTodos();

  let visibleTodos = todos;
  /////////////////search
  if (searchQuery)
    visibleTodos = visibleTodos.filter((t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  /////////////////filter
  {
    if (filter && filter === "completed")
      visibleTodos = visibleTodos.filter((f) => f.completed);
    else if (filter && filter === "active")
      visibleTodos = visibleTodos.filter((f) => !f.completed);
  }

  /////////////////sort by
  {
    if (sortBy && sortBy === "created") {
      visibleTodos = [...visibleTodos].sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
    } else if (sortBy && sortBy === "title") {
      visibleTodos = [...visibleTodos].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else if (sortBy && sortBy === "priority") {
      visibleTodos = [...visibleTodos].sort((a, b) => {
        const order = { high: 1, mediom: 2, low: 3 };
        return order[a.priority] - order[b.priority];
      });
    }
  }
  return (
    <div>
      {/* head section  */}
      <div className="flex text- justify-between">
        <div>
          <h1 className="text-white/90 text-3xl font-semibold ">My Tasks</h1>
          <p className="text-gray-300 text-lg py-3">
            Manage and organize your tasks officiently
          </p>
        </div>
        <div>
          <Button
            title={"Add New Task"}
            icon={"➕"}
            type={"primary"}
            onClick={() => {
              setShowForm(true);
            }}
          />
        </div>
      </div>
      {/* Add New todo form  */}
      {showForm && (
        <div className="inset-0 fixed backdrop-blur-sm bg-black/50 z-10 flex items-center justify-center ">
          <AddNewForm onClick={() => setShowForm(false)} />
        </div>
      )}

      {/* search bar  */}
      <SearchBar />

      {/* Show todos section */}
      <div>
        {visibleTodos.length > 0 ? (
          visibleTodos.map((todo) => <TodoItems todo={todo} key={todo.id} />)
        ) : (
          <EmptyMsg filter={filter} onClick={() => setShowForm(true)} />
        )}
      </div>
    </div>
  );
};
export default TodoPage;
