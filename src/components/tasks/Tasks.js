const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.name}</h3>
      ))}
    </div>
  );
};

Tasks.defaultProps = {
    tasks: []
}

export default Tasks;
