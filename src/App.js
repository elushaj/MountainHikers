import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Gallery from './components/Gallery/Gallery';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/AboutUs/Services';
import Slider from './components/carousel/Slider';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
function App() {
  return (
   <div>
   <Navbar/>
   <Hero/>
   <Gallery/>
  <AboutUs/> 
  <Services/>

  <FAQ/>
  <Contact/>
  <Slider/>
 
   </div>
  );
}

export default App;
