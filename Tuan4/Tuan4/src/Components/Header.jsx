
import React from 'react'
import './Header.css'
import Archivecheck from './Img/Archivecheck.png'
import Avatar from './Img/Avatar35.png'
import Group9 from './Img/Group9.png'


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Group9} alt="Logo" />
      </div>
      <div className="search">
        <img src={Avatar} alt="Avatar" className="search-img" />
        <input type="text" className="search-input" />
      </div>
      
      <div className="header-menu">
        <div className="header-menu-item">What to cook</div>
        <div className="header-menu-item">Recipes</div>
        <div className="header-menu-item">Ingredients</div>
        <div className="header-menu-item">Occasions</div>
        <div className="header-menu-item">About Us</div>
      </div>
      
      <button className="button">
        <img src={Archivecheck}alt="Archive" className="icon" />
        Your recipe box
      </button>
      
      <div className="avatar">
        <img src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Header;
