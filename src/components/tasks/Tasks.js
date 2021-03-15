import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} onDelete={onDelete} key={task.id} />
      ))}
    </div>
  );
};

Tasks.defaultProps = {
    tasks: []
}

export default Tasks;
