import "./navStyles.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";
const NavBar = () => {

const [click, setClick]= useState(false);
const handleClick = () => setClick(!click);

const[color, setColor]= useState(false);
const changeColor =()=>{
if (window.scrollY >= 100){ setColor(true);}
else{setColor(false);}
};

  return (
    <div className="header">
        <Link to="/">
            <h1>Developer Tifla_Portfolio</h1>
            </Link>
        <ul className={click ?"Nav-menu. active": "Nav-menu"}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/PROJECTS">PROJECTS</Link></li>
            <li><Link to="/CONTACT">CONTACT</Link></li>
            <li><Link to="/ABOUT">ABOUT</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"#fff"}}/>) :(
            <FaBars size={20} style={{color:"#fff"}}/>)}


        </div>
    </div>
  );
};

export default NavBar;