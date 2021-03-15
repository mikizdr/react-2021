import { useState } from "react";

import Header from "./components/tasks/Header";
import Tasks from "./components/tasks/Tasks";
import TaskCreate from "./components/tasks/TaskCreate";

// Function component
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Doctor Appoitment",
      day: "Feb 5th at 2:30pm",
      remider: true,
    },
    {
      id: 2,
      name: "Meeting at school",
      day: "Feb 5th at 1:30pm",
      remider: true,
    },
    {
      id: 3,
      name: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      remider: false,
    },
  ]);

  // Create a task
  const taskCreate = (task) => {
    // const ids = tasks.map((task) => task.id);
    // let id = ids.reduce((a, b) => Math.max(a, b)); // works only if the array is not empty
    // console.log(id);
    // if (id === 0) {
    //   id = 1;
    // }
    const id = Math.random() * 1000 + 1;
    const newTask = { ...task, id: id + 1 };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remider: !task.remider } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <TaskCreate taskCreate={taskCreate} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
