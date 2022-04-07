import "./Navbar.css";
import React, { useState } from "react";
import Button from "./Button";
import { GrHomeRounded } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../assets/output-onlinepngtools.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {AiOutlineClose} from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
function Navbar() {

const [nav,setNav]=useState(false)
const handleNav=()=>setNav(!nav)

  return (
    <div className='navbar'>
      <div className='logo'>
        <img style={{ height: 66, width: 83 }} alt="logo" src={logo} />
      </div>
      <ul className="nav-menu">
        <li>
          <GrHomeRounded/>
        </li>
        <li>Galeria</li>
        <li>Për ne</li>
        <li>FAQ</li>
        <li>Kontakt</li>
      </ul>
      <div className="nav-icons">
        <IoIosNotificationsOutline className='icon'  />
        <BsPerson className='icon'  />
      </div>
      <div onClick={handleNav} className="hamburger">
      {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
      </div>


      <div className={nav ?'mobile-menu active':'mobile-menu'}>
        <ul className='mobile-nav'>
          <li>
            <GrHomeRounded />
          </li>
          <li>Galeria</li>
          <li>Për ne</li>
          <li>FAQ</li>
          <li>Kontakt</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <Button>Njoftimet</Button>
            <Button>Llogaria</Button>
          </div>
          <div className="social-icons">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaYoutube className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
