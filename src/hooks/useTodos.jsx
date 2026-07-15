import { TodoContext } from "@/contexts/TodoContext";
import { useContext } from "react";

export const useTodos = () => {
  return useContext(TodoContext);
};
