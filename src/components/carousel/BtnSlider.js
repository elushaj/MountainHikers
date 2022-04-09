import React from "react";
import "./Slider.css";
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io";


export default function BtnSlider({ direction, moveSlide }) {

  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <IoIosArrowForward className="img"/> : <IoIosArrowBack className="img"/>} 
    </button>
  );
}