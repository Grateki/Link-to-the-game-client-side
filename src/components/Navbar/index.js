import "./style.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item slam-left">
          <h2 className="nav-title">Link to the game</h2>
        </li>
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/">logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
