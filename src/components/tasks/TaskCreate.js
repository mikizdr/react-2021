import { useState } from "react";

const TaskCreate = ({ taskCreate }) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    taskCreate({ name, day, reminder });
    setName("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-from" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          name="name"
          type="text"
          placeholder="Add Task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          name="day"
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          name="reminder"
          checked={reminder}
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default TaskCreate;
