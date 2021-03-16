import PropTypes from "prop-types";

import Button from "../tasks/reusable/Button";

const Header = ({ title, onCreateTask, showForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onCreateTask}
        color={showForm ? "red" : "green"}
        text={showForm ? "Close" : "Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// CSS in React JS
// const headeStyle = {
//   color: "black",
//   backgroundColor: "darkorange",
//   padding: "10px",
// };

export default Header;
