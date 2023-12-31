import ProfilePicture from './Assets/logo.svg';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <img src={ProfilePicture} alt="Little Lemon Header" />
      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;