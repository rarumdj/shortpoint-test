import React, { useRef, useState } from "react";
import CreateTask from "../components/CreateTask";
import { Itask } from "../types";
import Header from "../components/Header";
import Banner from "../components/Banner";
import TaskCard from "../components/TaskCard";

const Home = React.memo(() => {
  const [tasks, setTasks] = useState<Itask[]>([
    { id: 1, text: "Training at the Gym", completed: false },
    { id: 2, text: "Play Paddle with friends", completed: false },
    { id: 3, text: "Burger BBQ with family", completed: false },
  ]);
  const [selectedTask, setSelectedTask] = useState<Partial<Itask>>({});
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleTodo = (todoId: number) => {
    // Update the tasks by mapping over the array
    setTasks(
      tasks.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAddTask = () => {
    setSelectedTask({ text: "" });
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="flex md:flex-row flex-col h-screen">
      <div className="md:w-4/12 w-full h-full shadow-neutral-800 shadow-xl-right relative">
        <Header />
        <Banner />
        <div className="bg-white p-6 h-[70vh] overflow-y-auto ">
          <div className="space-y-6">
            {tasks.map(({ completed, id, text }, index) => (
              <TaskCard
                completed={completed}
                id={id}
                text={text}
                key={index}
                toggleTodo={toggleTodo}
                setSelectedTask={setSelectedTask}
              />
            ))}
          </div>
        </div>

        <div className="absolute right-5 bottom-4">
          <button
            onClick={handleAddTask}
            className=" border-2 text-white h-[61px] w-[60px] flex items-center justify-center rounded-full bg-[#3556AB] border-[#123EB1] inner-shadow-btn">
            <span className="m-auto text-[36px]">+</span>
          </button>
        </div>
      </div>

      <div className="md:w-8/12 w-full h-full flex flex-col">
        <CreateTask
          tasks={tasks}
          setTasks={setTasks}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          forwardedRef={inputRef}
        />
      </div>
    </div>
  );
});

export default Home;
