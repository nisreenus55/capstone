import React from "react";
import ProfilePicture from "./Assets/logo.svg";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <nav className="nav-bar-footer">
        <div>
          <img src={ProfilePicture} alt="Little Lemon Header" />
          <p className="copyright">Copyright Little Lemon &copy; 2023</p>
        </div>
        <ul className="ul-footer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
        </ul>

        <ul className="ul-footer">
          <span>Contact</span>
          <li>
            <a href="#" className="a-footer">
              Address
            </a>
          </li>
          <li>
            <a href="#" className="a-footer">
              Phone
            </a>
          </li>
          <li>
            <a href="#" className="a-footer">
              Email
            </a>
          </li>
        </ul>

        <ul className="ul-footer">
          <span>Social Media Links</span>

          <li>
            <FaFacebook size={20} className="social" />
          </li>
          <li>
            <FaTwitter size={20} className="social" />
          </li>
          <li>
            <FaGithub size={20} className="social" />
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Footer;
