import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {location.pathname !== '/'&& <Link to="/">Home</Link>} &nbsp;
      {location.pathname !== '/about'&& <Link to="/about">About</Link>} | &nbsp;
      {location.pathname !== '/posts'&& <Link to="/posts">Posts</Link>}
    </footer>
  );
};
export default Footer;
