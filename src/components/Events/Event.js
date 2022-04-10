import React from "react";
import { VscArrowSwap } from "react-icons/vsc";
import Img6 from "../../assets/img6.jpg";
import Button from "../button/Button";
import "./Event.css";
import {Link} from 'react-scroll'
function Event() {
  return (
    <div name="event" className="event-container">
   <h2>Aventura e radhës</h2>    
   <div className="event-content">
       
        <div className="image-box">
          <img className="img-box" src={Img6} />
        </div>

        <div className="event-list">
        

          <div className="event-table">  <h1>Prevalle</h1>
          <h3 style={{marginBottom:'2rem'}}> 1946 ml</h3>
            <tbody>
              <tr>
                <td style={{ fontWeight: 'bold' }}>DISTANCA</td>
                <td> 6km</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>DATA</td>
                <td>21.02.2021</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>NISJA - KTHIMI</td>
                <td>8:00-18:00</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>TRANSPORTI</td>
                <td>
                  {" "}
                  Viva <VscArrowSwap style={{weight:'14px'}} />   prevalle
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>ÇMIMI</td>
                <td>10 €</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 'bold' }}>PAJISJET</td>
                <td>
                  {" "}
                  Këpucë mali, veshje sportive, jakne shiu, syze, kapele, dorza,
                  ushqim për një ditë, ujë 1L
                </td>
              </tr>
              <tr >
                <td style={{ fontWeight: 'bold' }}>VËREJTJE</td>
                <td>
                  {" "}
                  Për shkak të masave Covid jeni të obliguar të mbani maskën në
                  autobus!
                </td>
              </tr>
              <Link to='contact'>  <button className='contact-btn'> Rezervo </button></Link>
            </tbody>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Event;
