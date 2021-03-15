import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          key={task.id}
        />
      ))}
    </div>
  );
};

Tasks.defaultProps = {
  tasks: [],
};

export default Tasks;
