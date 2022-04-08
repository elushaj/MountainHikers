import React,{useState} from 'react'
import  './Hero.css'
import Video from '../../assets/video2.mp4'
import {AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'

function Hero() {

    const [search,setSearch]=useState(false)
const handleSearch=(event)=>{setSearch(!search)
}

const cancelSearch=(event)=>{setSearch(search)
   setSearch(!search)
}

  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
<source src={Video} type='video/mp4'/>
        </video>
        <div className="overlay"></div>
        <div className='content'>
            <h1 className='title'>MOUNTAIN HIKERS</h1>
            <h2> Eksploro me ne . . .</h2>
        {!search ?(<div  onClick={handleSearch}><AiOutlineSearch className='search-icon' /></div>):null}  
  {search ? (<form className= 'form ' >
                    <div className='input-form'>
                        <input className='input'type="text" placeholder='Kërko Destinacione . . .' />
                  </div> <div className='search-handler'>
                    <button>   <AiOutlineSearch className='innersearch-icon'/></button>
                    </div>    
                  
                   
                      <div className='cancel-handler'>   
                   <button onClick={cancelSearch}> <AiOutlineClose className="close-icon"/></button>
                   </div>
                
                </form>): null}   
               
        </div>
    </div>
  )
}

export default Hero