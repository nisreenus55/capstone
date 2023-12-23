import Header from "./Header";
import ProfilePicture from './Assets/logo.svg';

const Nav = () => { 

    return (

        <nav class="nav-bar">
             <img src={ProfilePicture} alt="Little Lemon Header"  />
        <ul className="ul">
            <li><a href="#">Home</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">RESERVATION</a></li>
            <li><a href="#">ORDER ONLINE</a></li>
            <li><a href="#">LOGIN</a></li>

        </ul>
      </nav>
    )
}

export default Nav;