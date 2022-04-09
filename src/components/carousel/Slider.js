import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'

import dataAlbum from '../Gallery/dataAlbum'
import { render } from '@testing-library/react'

export default function Slider(props) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataAlbum.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataAlbum.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataAlbum.length)
        }
    }


    return (
      <div className='slider'>
        <div className="container-slider">


           
         {dataAlbum.map((item, index) => (

                <div key={index} className={slideIndex ===index+1?'slide active-anim':'slide'}>
                 
                        <img 
                        src={item.imgSrc} 
                        />
                    </div>
                )
                
              )
            
         }
          
         
            
        </div><BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
</div>
    )
          }

