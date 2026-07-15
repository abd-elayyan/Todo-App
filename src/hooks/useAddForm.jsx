"use client";
import { AddFormContext } from "@/contexts/AddFormContext";
import { useContext } from "react";

export const useAddForm = () => {
  return useContext(AddFormContext);
};
