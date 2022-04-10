import "./Navbar.css";
import React, { useState } from "react";
import Button from "../button/Button";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import logo from "../../assets/output-onlinepngtools.png";
import {Link} from 'react-scroll'
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
         <Link to="home"> <MdHomeFilled color="white" size={32}/></Link>
        </li>
        <Link to='galeria'><li>Galeria</li></Link>
        <Link to='perne'> <li>Për ne</li></Link>
        <Link to='FAQ'> <li>FAQ</li></Link>
        <Link to='kontakt'><li>Kontakt</li> </Link>  <Link to='event'><h4>Aventura e radhës</h4></Link>
      </ul>
      <div className="nav-icons" style={{marginRight:'1rem'}}>
      
      </div>
      <div onClick={handleNav} className="hamburger">
 {!nav ?(<AiOutlineMenu className='icon'style={{ height: 36, width: 53 }} />) : (<AiOutlineClose className="icon"/>)} 
      </div>


      <div className={nav ?'mobile-menu active':'mobile-menu'}>
        <ul className='mobile-nav'>
          <li>
          <Link to="home"> <MdHomeFilled /></Link>
        </li>
          <Link to='galeria'><li>Galeria</li></Link>
        <Link to='perne'> <li>Për ne</li></Link>
        <Link to='FAQ'> <li>FAQ</li></Link>
        <Link to='kontakt'><li>Kontakt</li> </Link> 
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
           <Link to='event'> <Button>Aventura e radhës</Button>
            </Link>
          </div>
          <div className="social-icons">
          <a href="https://www.facebook.com/mountainhikersclub"  > <FaFacebook className='icon' style={{color:'white'}} /></a>
           <a href="https://www.instagram.com/mountainhikersclub/" ><FaInstagram className='icon'  style={{color:'white'}} /></a>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
