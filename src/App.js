import { useState } from "react";

import Header from "./components/tasks/Header";
import Tasks from "./components/tasks/Tasks";

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

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
