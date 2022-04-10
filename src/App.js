import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Gallery from './components/Gallery/Gallery';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/AboutUs/Services';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Event from './components/Events/Event';
function App() {
  return (
   <div>
   <Navbar/>
   <Hero/>
   <Gallery/>
  <AboutUs/> 
  <Services/>

  <FAQ/>
  <Event/>
  <Contact/>
 
 
   </div>
  );
}

export default App;
