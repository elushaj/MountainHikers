import React,{useState} from 'react'
import './Gallery.css'
import {AiOutlineArrowRight,AiOutlineClose} from 'react-icons/ai'


import Slider from '../carousel/Slider'
import data from './dataAlbum'

const  Gallery=()=> {
  const [isShown, setIsShown] = useState(false);
 
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
      </div> )
   
   
      
    }
    
    
    
    )
  }
</div>



    </div>
  )
}

export default Gallery