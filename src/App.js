import React from "react";
import { useState, useEffect } from "react";

import Header from "./components/tasks/Header";
import Tasks from "./components/tasks/Tasks";
import TaskCreate from "./components/tasks/TaskCreate";

// Function component
const App = () => {
  const [tasks, setTasks] = useState([]);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getTasksFromServer = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };

    getTasksFromServer();
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    return data;
  };

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

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

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

  const onCreateTask = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <h4>React version: {React.version}</h4>
      <hr />
      <Header
        title="Task Tracker"
        onCreateTask={onCreateTask}
        showForm={showForm}
      />
      {showForm && <TaskCreate taskCreate={taskCreate} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
