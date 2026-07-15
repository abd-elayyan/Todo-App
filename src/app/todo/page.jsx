"use client";
import { AddNewForm } from "@/components/ui/AddNewForm";
import { Button } from "@/components/ui/Buttotn";
import EmptyMsg from "@/components/ui/EmptyMsg";
import { useState } from "react";

const todo = () => {
  const [showForm, setShowForm] = useState(false);

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
      {/* Show todos section */}
      <div>
        <EmptyMsg
          title={"No tasks yet"}
          subtitle={
            "Create your fist task to get started with organizing your work"
          }
          icon={"📄"}
        />
      </div>
    </div>
  );
};
export default todo;
