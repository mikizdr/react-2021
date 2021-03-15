import { useState } from 'react'

const Tasks = () => {
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
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.name}</h3>
      ))}
    </div>
  );
};

export default Tasks;
