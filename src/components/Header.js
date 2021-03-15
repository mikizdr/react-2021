import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in React JS
// const headeStyle = {
//   color: "black",
//   backgroundColor: "darkorange",
//   padding: "10px",
// };

export default Header;
