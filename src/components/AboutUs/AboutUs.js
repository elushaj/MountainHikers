import React from 'react'
import Img3 from '../../assets/img3.jpg'
import './AboutUs.css'

function AboutUs() {
  return (
      <div className='aboutus'>
    <div className='about'><img
    className="about-img"
    src={Img3}
    alt="Mountain Hiker "
  />
  <h1 className="about-title">Për Mountain Hikers!</h1>
  <h2 className="about-subtitle">Shteg për ekskursione </h2>
  <div className="about-text">
    <p>
    Në vitin 2013, Mountain Hikers u themelua kur një grup individësh vendosën t'i kthenin interesat e tyre të përbashkëta në një klub zyrtar udhëtimi. Pas disa takimeve të shpejta, ne ishim në rrugën tonë për të krijuar diçka të jashtëzakonshme. </p>
    <br></br><p>
    Me kalimin e kohës, ne jemi rritur në një organizatë më serioze dhe të pjekur, duke na lejuar t'i çojmë interesat tona në nivele të reja. Kur të vendosni të bashkoheni me ne, edhe ju do të keni akses në ngjarje të ndryshme dhe, më e rëndësishmja, në një komunitet njerëzish që janë po aq të pasionuar sa ju.
   </p>
  </div>
  </div>
 </div>
  )
}

export default AboutUs 