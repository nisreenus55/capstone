import ProfilePicture from "./Assets/logo.svg";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <nav class="nav-bar-footer">
        <div>
          <img src={ProfilePicture} alt="Little Lemon Header" />
          <p className="copyright">Copyright Little Lemon &copy; 2023</p>
        </div>
        <ul className="ul-footer">
          <span>Doormat Navigation</span>

          <li>
            <a href="#" className="a-footer">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="a-footer">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="a-footer">
              MENU
            </a>
          </li>
          <li>
            <a href="#" className="a-footer">
              RESERVATION
            </a>
          </li>
          <li>
            <a href="#" className="a-footer">
              ORDER ONLINE
            </a>
          </li>
          <li>
            <a href="#" className="a-footer">
              LOGIN
            </a>
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
    </div>
  );
};

export default Footer;
