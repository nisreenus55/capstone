import { useState } from 'react';
import ProfilePicture from './Assets/logo.svg';
import { Link } from "react-router-dom";

const Nav = () => {
  const [confirmed, setConfirmed] = useState(null);

  function checkURLchange() {
    setConfirmed(window.location.pathname === "/confirmedBooking");
  }
  setInterval(checkURLchange, 1000);
  return (
    <nav className="nav-bar">
      <img src={ProfilePicture} alt="Little Lemon Header" />
      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        {!confirmed && <li>
          <Link to="/reservation">Reservation</Link>
        </li>}
      </ul>
    </nav>
  );
};

export default Nav;