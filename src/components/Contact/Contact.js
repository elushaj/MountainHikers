import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import "./Contact.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m87dscu",
        "template_whgniqi",
        form.current,
        "cOOmGnm-QnHY5X2Xk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
      
          <h2>Na Kontaktoni</h2>{" "}
          <div className="box">
              <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="input"
              placeholder="Emri"
              type="text"
              name="name"
            />

         

            <textarea placeholder="Mesazhi . . ." name="message" />
            <input className="send-btn" type="submit" value="Dërgo" />
          </form></div>
          <div className="contact-info">
            <div className="contact-box">

              <FiPhoneCall className="white-icon" />{" "}
              <label> +383 49 897889</label>
            </div>
            <div className="contact-box">
              <FiMail className="white-icon" />{" "}
              <label>mountainhikers20@gmail.com </label>
            </div>

            <div className="contact-box">
              <RiFacebookCircleLine className="white-icon" />{" "}
              <label>Mountain hikers </label>
            </div>

            <div className="contact-box">
              <AiOutlineInstagram className="white-icon" />{" "}
              <label>@mountainhikersclub </label>
            </div>
           
          </div>
          
       </div>
      </div>
    </div>
  );
}

export default Contact;
