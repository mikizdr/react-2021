const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.name}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
