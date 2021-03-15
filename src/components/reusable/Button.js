import { PropTypes } from "prop-types";

const Button = ({ color, title }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: "Add",
  color: "green",
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
