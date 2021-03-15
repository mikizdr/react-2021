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

  const handleChange = ({ target, currentTarget }) => {
    console.log(target.name);
    switch (target.name) {
      case "name":
        setName(target.value);
        break;

      case "day":
        setDay(target.value);
        break;

      case "reminder":
        setReminder(currentTarget.checked);
        break;

      default:
        break;
    }
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
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          name="day"
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={handleChange}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          name="reminder"
          checked={reminder}
          type="checkbox"
          value={reminder}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default TaskCreate;
