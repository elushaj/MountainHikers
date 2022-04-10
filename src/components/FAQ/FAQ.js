import React from 'react'
import Button from '../button/Button'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import './FAQ.css'
import {Link} from 'react-scroll'
function FAQ () {
  return (
    <div name='FAQ' className='faq-container'>
<div className='faq-content'>
    <div className='faq-title'>
<h1> PYETJE TË SHPESHTA</h1>

<h3> Informacione të dobishme </h3>
</div>
<div className='info'>
    <div className='info-content'>
<h3>SA SHPESH ORGANIZOHEN EKSKURSIONET?</h3>
<p> Ekskursionet zakonisht organizohen vikendeve (kryesisht të dielave). Lajmërimet bëhen së paku një javë para organizimit , në webfaqe si dhe në rrjetet tona sociale. Varësisht nga lloji i organizimit (hiking, kamping, shëtitje) mund të varioj kohëzgjatja e ekskursionit nga një-ditore deri tek 3-4 ditor.</p>
</div>
<div className='info-content'>
<h3>ÇKA PËRFSHIHET NË ÇMIM?  </h3>
<p> Në çdo pako ofrohet transporti nga pikënisja (Tek Viva Fresh në qytetin e Gjakovës) deri tek pika që përcaktohet varësisht nga lokacioni i destinuar. Tek organizimet dimërore përfshihen edhe pajisjet si snow-shoes dhe shkopinjët.  </p>
</div>
<div className='info-content'>
<h3>SI MUND TË MARR PJESË?</h3>
<p> Për shkak të vendeve të kufizuara gjatë transportit është i obliguar rezervimi, i cili mund të bëhet përmes rrjeteve tona sociale si dhe përmes emailit ( mountainhikers20@gmail.com ) apo numrit të telefonit ( 049 897 889 ).  </p>
</div>
<div className='info-content'>


</div>
<div className='contact-txt'>
<h3> Keni pyetje tjetër? Na kontaktoni.</h3>
<Link to='kontakt'><button className='contact-btn'> Kontakt </button></Link>
</div>
<div className="social-icons">
<a href="https://www.facebook.com/mountainhikersclub"  > <FaFacebook className='social-icon'  style={{color:'black'}}/></a>
<a href="https://www.instagram.com/mountainhikersclub/" >    <FaInstagram className='social-icon' style={{color:'black'}} /></a>
  
          </div>

</div>
</div>

</div>


    
  )
}

export default FAQ