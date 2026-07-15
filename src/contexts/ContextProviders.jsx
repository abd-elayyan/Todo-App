"use client";
import { AddFormProvider } from "./AddFormContext";
import { TodoProvider } from "./TodoContext";

export const ConotextProvider = ({ children }) => {
  return (
    <AddFormProvider>
      <TodoProvider>{children}</TodoProvider>
    </AddFormProvider>
  );
};
