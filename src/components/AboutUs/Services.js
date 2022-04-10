import React from 'react'
import {BsFlag} from 'react-icons/bs'
import {FaHiking} from 'react-icons/fa'
import {GiCampingTent} from 'react-icons/gi'
import './Services.css'
function Services() {
  return (
    <div  className='services'>
    <ul>
        <li><FaHiking className='icon'/> <label>HIKING</label></li>
        <li><GiCampingTent className='icon'/><label>KAMPING</label></li>
        <li><BsFlag className='icon'/><label>ECJE NË MAL</label></li>
        </ul>
      </div>
  )
}

export default Services