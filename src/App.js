import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Tasks from "./components/tasks/Tasks";
import TaskCreate from "./components/tasks/TaskCreate";
import About from "./pages/About";

// Function component
const App = () => {
  const URL = "http://localhost:5000/tasks";

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
    const response = await fetch(`${URL}`);
    const data = await response.json();
    return data;
  };

  // Fetch a single tasks
  const fetchTask = async (id) => {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    return data;
  };

  // Create a task
  const taskCreate = async (task) => {
    const response = await fetch(`${URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();

    setTasks([...tasks, data]);

    // const ids = tasks.map((task) => task.id);
    // let id = ids.reduce((a, b) => Math.max(a, b)); // works only if the array is not empty
    // console.log(id);
    // if (id === 0) {
    //   id = 1;
    // }
    // const id = Math.random() * 1000 + 1;
    // const newTask = { ...task, id: id + 1 };
    // setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const ime = await fetchTask(id);

    const response = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...ime, reminder: !ime.reminder }),
    });
    const updatedTask = await response.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: updatedTask.reminder } : task
      )
    );
  };

  const onCreateTask = () => {
    setShowForm(!showForm);
  };

  return (
    <Router>
      <div className="container">
        <h4>React version: {React.version}</h4>
        <hr />
        <Header
          title="Task Tracker"
          onCreateTask={onCreateTask}
          showForm={showForm}
        />
        <br />
        {/* <Route path='/' exact render={(props) => ( */}
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showForm && (
                <TaskCreate
                  taskCreate={taskCreate}
                  onCreateTask={onCreateTask}
                />
              )}

              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>
          )}
        />

        <br />

        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
