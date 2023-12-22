import React from 'react'
import ProfilePicture from './Assets/logo.svg';
import Nav from './Nav';
const Header = () => { 
    return(
        <header class="head-image">
                <img src={ProfilePicture} alt="Little Lemon Header"  />
                
        </header>
    )
}

export default Header;