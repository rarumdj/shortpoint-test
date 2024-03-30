import React from "react";
import { IProps, Itask } from "../types";
import { ReactComponent as Checked } from "../assets/checked.svg";
import { ReactComponent as Unchecked } from "../assets/uncheck.svg";

type taskcardProps = Itask & Partial<IProps>;
const TaskCard = ({
  completed,
  text,
  id,
  setSelectedTask,
  toggleTodo,
}: taskcardProps) => {
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setSelectedTask && setSelectedTask({ completed, text, id });
  };
  return (
    <div
      onClick={() => toggleTodo && toggleTodo(id)}
      className="rounded-xl border cursor-pointer border-[#E7E7E7] flex items-center justify-between bg-white shadow-lg drop-shadow-md shadow-black/10 p-5">
      <div className="flex items-center gap-3">
        {completed ? <Checked /> : <Unchecked />}
        <h6
          className={`font-medium text-base  ${
            completed ? "text-[#8D8D8D] line-through " : "text-[#071D55]"
          }`}>
          {text}
        </h6>
      </div>
      <button
        onClick={handleEdit}
        className="py-2 px-4 border rounded-md border-[#071D55] bg-white text-[#071D55]">
        Edit
      </button>
    </div>
  );
};

export default TaskCard;
