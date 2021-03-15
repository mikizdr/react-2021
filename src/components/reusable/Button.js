 const Button = ({color, title}) => {
  return <button style={{ backgroundColor: color }} className="btn">{title}</button>;
};

Button.defaultProps = {
  title: 'Add',
  color: 'green'
}


export default Button