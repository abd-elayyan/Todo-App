"use client";

import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("created");

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now().toString(),
      title: todo.title,
      description: todo.description,
      priority: todo.priority,
      category: todo.category,
      dueDate: todo.dueDate,
      completed: false,
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // is completed ?
  const ToggelTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              updatedAt: new Date().toString(),
            }
          : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const state = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        ToggelTodo,
        deleteTodo,
        filter,
        setFilter,
        state,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
