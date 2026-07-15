"use client";
import { createContext, useState } from "react";

export const AddFormContext = createContext();

export const AddFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
    category: "General",
    dueDate: "",
  });

  return (
    <AddFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </AddFormContext.Provider>
  );
};
