import React,{useState} from 'react'
import './Gallery.css'
import {AiOutlineArrowRight,AiOutlineClose} from 'react-icons/ai'

import Img1 from '../../assets/img1.jpg' 
import Img2 from '../../assets/img2.jpg' 
import Img3 from '../../assets/img3.jpg' 
import Img4 from '../../assets/img4.jpg' 
import Img5 from '../../assets/img5.jpg' 
import Img6 from '../../assets/img6.jpg' 
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils'
const  Gallery=()=> {
  const [isShown, setIsShown] = useState(false);
  let data =[

    {
      id:1,
      imgSrc:Img1,
      title:'Bogë, Rugovë'
    },

    {
      id:2,
      imgSrc:Img2,
      title:'Maja e Ujezës, Koshare'
    },
    {
      id:3,
      imgSrc:Img3,
      title:'Maja e Oshlakut, Prevallë'
    },
    {
      id:4,
      imgSrc:Img4,
      title:'Maja e Vjellakut, Bjeshkët e Nemuna'
    },
    {
      id:5,
      imgSrc:Img5,
      title:'Maja e Vajushës, Lëpushë'
    },
    {
      id:6,
      imgSrc:Img6,
      title:'Maja e Hasanit'
    },
  

  ]
  const [model,setModel]=useState(false)
  const [tempimgSrc,setTempImgSrc]=useState('')

  const getImg=(imgSrc)=>{
setTempImgSrc(imgSrc);
setModel(true)
  }
  return (


    <div className='gallery-container'>
     
<h1>Galeria</h1> 
<div className={model ? 'model open':'model'}>
  <img src={tempimgSrc}/>
  <AiOutlineClose onClick={()=>setModel(false)} className="icon"/>
</div>
<div className='gallery'>
  {data.map((item,index)=>{
    return(
      <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
        <img  onMouseEnter={() => setIsShown(true)}   onMouseLeave={() => setIsShown(false)} src={item.imgSrc} style={{width:'100%'}}/>
      <h3>{item.title}</h3>
      <h4 >Më shumë <AiOutlineArrowRight/></h4>
      </div> )
   
   
      
    }
    
    
    
    )
  }
</div>



    </div>
  )
}

export default Gallery