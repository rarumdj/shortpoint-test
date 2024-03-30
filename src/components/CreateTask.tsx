import React, { useEffect, useState } from "react";
import { IProps } from "../types";

const CreateTask = ({
  tasks,
  setTasks,
  selectedTask,
  setSelectedTask,
  forwardedRef,
}: IProps) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(selectedTask?.text as string);
  }, [selectedTask]);

  const saveTodo = (todoId: number | undefined) => {
    // Update the tasks by mapping over the array
    if (todoId)
      setTasks(
        tasks.map((todo) =>
          todo.id === todoId ? { ...todo, text: value } : todo
        )
      );
    else
      setTasks([
        ...tasks,

        { id: tasks.length++, text: value, completed: false },
      ]);
    setSelectedTask && setSelectedTask({ text: "" });
  };

  const removeTodo = (todoId: number) => {
    // Update the tasks by filtering the array
    setSelectedTask && setSelectedTask({ text: "" });
    setTasks(tasks.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <div className="flex gap-4 bg-[#3556AB] items-center justify-center drop-shadow-md shadow-md px-12 h-[123px] py-8">
        <h5 className="font-medium text-2xl text-shadow text-white ">
          {selectedTask?.id ? "Edit Task" : "Create Task"}
        </h5>
      </div>
      <div className="p-6 flex flex-col">
        <h5>Task Name</h5>
        <div className="mt-3">
          <input
            ref={forwardedRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="p-4 text-base rounded-lg relative inline-flex w-full border-2 border-gray-300 bg-transparent leading-none text-gray-700 placeholder-gray-500 transition-colors ease-in-out placeholder:text-sm hover:border-gray-900 focus:border-gray-900 focus:outline-none focus:ring-gray-400 focus:ring-opacity-30 focus:ring-4"
          />
        </div>
      </div>
      <div className="mt-auto p-6">
        <div className="flex items-center gap-2">
          {selectedTask?.id && (
            <button
              onClick={() => removeTodo(selectedTask?.id as number)}
              className="w-[121px] text-shadow rounded-lg border-2 inner-shadow-btn bg-[#AB3535] border-[#720D0D] text-white flex transform items-center justify-center py-3 px-4 font-medium">
              Delete
            </button>
          )}
          <button
            disabled={!value?.trim()}
            onClick={() => saveTodo(selectedTask?.id as number)}
            className="rounded-lg text-shadow w-full disabled:cursor-not-allowed border-2 inner-shadow-btn bg-[#3556AB] border-[#0D2972] text-white flex transform items-center justify-center py-3 px-4 font-medium">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
