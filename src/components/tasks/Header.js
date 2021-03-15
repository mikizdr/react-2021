import PropTypes from "prop-types";

import Button from "./reusable/Button";

const Header = ({ title, onCreateTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onCreateTask} />
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
