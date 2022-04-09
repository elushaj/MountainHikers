import "./Navbar.css";
import React, { useState } from "react";
import Button from "../button/Button";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../../assets/output-onlinepngtools.png";
import {AiOutlineClose} from 'react-icons/ai'
import {MdHomeFilled} from 'react-icons/md'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
function Navbar() {

const [nav,setNav]=useState(false)
const handleNav=()=>setNav(!nav)

  return (
    <div className="navbar">
      <div className='logo'>
        <img style={{ height: 76, width: 93 }} alt="logo" src={logo} />
      </div>
      <ul className="nav-menu">
        <li>
          <MdHomeFilled color="white" size={32}/>
        </li>
        <li>Galeria</li>
        <li>Për ne</li>
        <li>FAQ</li>
        <li>Kontakt</li><h4>Aventura e radhës</h4>
      </ul>
      <div className="nav-icons" style={{marginRight:'1rem'}}>
      
      </div>
      <div onClick={handleNav} className="hamburger">
 {!nav ?(<AiOutlineMenu className='icon'style={{ height: 36, width: 53 }} />) : (<AiOutlineClose className="icon"/>)} 
      </div>


      <div className={nav ?'mobile-menu active':'mobile-menu'}>
        <ul className='mobile-nav'>
          <li>
            <MdHomeFilled />
          </li>
          <li>Galeria</li>
          <li>Për ne</li>
          <li>FAQ</li>
          <li>Kontakt</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <Button>Aventura e radhës</Button>
            
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
