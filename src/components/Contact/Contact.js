import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import AlertBox from "./AlertBox";
import "./Contact.css";
function Contact() {
  const form = useRef();
  const isEmpty = (value) => value.trim() === '';
  const [values, setValues] = useState({
    name: "",
    message: "",
  });

  
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = (e) => {
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
        setStatus("SUCCESS"),
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  });

  return (
    <div name='contact'className="contact-container">
      <div className="contact-content">
        {status && <AlertBox className="alertbox" />}
        <h2>Na Kontaktoni</h2>

        <div className="box">
          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
              <input
                className="input"
                placeholder="Emri"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />

              <textarea
                placeholder="Mesazhi . . ."
                name="message"
                onChange={handleChange}
                value={values.name}
              />
              <input className="send-btn" type="submit" value="Dërgo" />
            </form>
          </div>
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
