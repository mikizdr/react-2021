import PropTypes from "prop-types";

import Button from "./reusable/Button";

const Header = ({ title }) => {
  const onClick = () => console.log("button is clicked");

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} />
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
