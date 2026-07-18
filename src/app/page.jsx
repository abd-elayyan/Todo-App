"use client";
import { AddNewForm } from "@/components/ui/AddNewForm";
import { Button } from "@/components/ui/Buttotn";
import EmptyMsg from "@/components/ui/EmptyMsg";
import { QuickActions } from "@/components/ui/QuickActions";
import { StateBox } from "@/components/ui/StateBux";
import { TodoItems } from "@/components/ui/TodoItems";
import { useTodos } from "@/hooks/useTodos";
import Link from "next/link";

export default function Home() {
  const { showForm, setShowForm, state, todos, setFilter } = useTodos();

  return (
    <div>
      {/* head section  */}
      <div className="bg-white/90 rounded-2xl shadow-2xl flex flex-col items-center p-9">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to TodoApp ✨
        </h1>
        <h5 className="text-gray-600 font-medium my-2">
          stay organized and pruductive with our bueautiful task management
          system.
        </h5>
        <h5 className="text-gray-600 font-medium">
          Track your progress , set priorities, and never miss a deadline.
        </h5>
        <div className="flex  w-full gap-4 items-center justify-center max-w-xl mx-auto my-2">
          <Button
            title={"Add Your First task"}
            icon={"✨"}
            type={"primary"}
            className={" "}
            onClick={() => {
              setShowForm(true);
            }}
          />
          {showForm && (
            <div className="inset-0 fixed backdrop-blur-sm bg-black/50 z-10 flex items-center justify-center ">
              <AddNewForm onClick={() => setShowForm(false)} />
            </div>
          )}
          <Link href={"/todo"} className="h-11">
            {" "}
            <Button
              title={"View aAll Tasks"}
              icon={"📰"}
              type={"secondary"}
              className={" py-2 h-11 w-56"}
            />
          </Link>
        </div>
      </div>

      {/* status boxes */}
      <div className="relative flex gap-4 w-full my-8">
        <StateBox title={"Total Tasks"} icon={"📊"} count={state.total} />
        <StateBox title={"Completed"} icon={"✅"} count={state.completed} />
        <StateBox title={"Active"} icon={"⏳"} count={state.active} />
        <StateBox
          title={"Completion Rate"}
          icon={"🎯"}
          count={`${state.total > 0 ? (state.completed / state.total) * 100 : "100"} % `}
        />
      </div>

      {/* Recent tasks & Quick actions */}
      <div className="flex w-full gap-4 justify-between ">
        {/* Recent tasks */}
        <div className="bg-white/90 shadow-2xl rounded-2xl p-5  w-xl">
          {/* header */}
          <div className="flex justify-between">
            <p className="text-2xl text-gray-700 ">Recent tasks</p>
            <Link href={"/todo"} className="text-blue-500">
              View All
            </Link>
          </div>
          {/* todos */}
          <div className="max-h-80 h-full min-h-80 relative overflow-y-auto px-2">
            {todos && todos.length > 0 ? (
              todos.map((todo) => <TodoItems todo={todo} key={todo.id} />)
            ) : (
              <div className=" text-center py-10  rounded-2xl border-gray-300   flex flex-col items-center h-full max-h-80 w-full">
                <span className="text-7xl ">📰</span>
                <p className="text-3xl py-4 font-semibold text-gray-800">
                  No tasks yet
                </p>
                <p className="text-gray-400 text-lg font-normal mb-4">
                  Create your fist task to get started with organizing your work
                </p>
                <div className="pb-6">
                  <Button
                    title={"Create New Task"}
                    icon={"➕"}
                    onClick={() => setShowForm(true)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions  */}
        <div className="bg-white/90 shadow-2xl rounded-2xl p-5 max-w-xl w-xl">
          <p className="py-3 text-xl text-gray-700 font-semibold">
            Quick Actions
          </p>
          <div className=" space-y-2 flex flex-col w-full">
            <button onClick={() => setShowForm(true)}>
              <QuickActions
                title={"Add New Task"}
                subTitle={"Create a new task with priority and over due"}
                icon={"➕"}
              />
            </button>
            <Link href={"/todo"} onClick={() => setFilter("active")}>
              <QuickActions
                title={"View Active Tasks"}
                subTitle={"see all pending tasks"}
                icon={"⏳"}
              />
            </Link>
            <Link href={"/todo"} onClick={() => setFilter("completed")}>
              <QuickActions
                title={"View Completed"}
                subTitle={"Review your accomplish"}
                icon={"✅"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
