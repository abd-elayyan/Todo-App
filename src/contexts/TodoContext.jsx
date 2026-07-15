"use client";

import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now().toString(),
      title: todo.title,
      description: todo.description,
      priority: todo.priority,
      category: todo.category,
      dueDate: todo.dueDate,
      completed: false,
      createdAt: Date.now().toString,
      updatedAt: Date.now().toString,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
