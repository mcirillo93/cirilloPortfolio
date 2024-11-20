
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact Me</Link>
    </nav>
  );
};

export default Navbar;
