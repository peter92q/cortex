import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LabsBar from './components/Stats'
import VideoPromo from './components/VideoPromo'
import { wave } from './assets'
import Marquee from './components/Marquee'
import Chart from './components/Chart'
import Offers from './components/Offers'
import BusinessPromo from './components/BusinessPromo'
import Clients from './components/OverThreeHundred'
import ESG from './components/ESG'
import DownloadApp from './components/DownloadApp'
import Footer from './components/Footer'



const App = ()=> {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible); 
  
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } //else {
       // reveals[i].classList.remove("active");
      //}     *if you want the animation to loop*
    }
  } 
  window.addEventListener("scroll", reveal);

return(
    <div className="bg-black w-full ">
      
      <div id='home' className='mb-20'>
        <Navbar/>
        <button onClick={scrollToTop} className={`fixed z-[100] bottom-0 bg-black border-[1px] border-teal-500 right-0 mr-2 mb-2  w-8 h-8 
        rounded-full justify-center items-center ${visible? "flex": "hidden"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
      
      
       <Hero/>
       
       <img src={wave} className='mt-20'/>
        

       <div className='reveal fade-bottom'>
         <VideoPromo/>
         
       </div>
       

       <div className='pb-20 reveal fade-bottom'>
        <LabsBar/>
       </div>

       <div className='reveal fade-bottom'>
        <Offers/>
       </div>

       <div className='reveal fade-bottom'>
        <BusinessPromo/>
       </div>

       <div className='reveal fade-bottom'>
        <Chart/>
       </div>

       <div className='reveal fade-bottom'>
        <Clients/>
       </div>

      <div className='reveal fade-bottom'>
        <ESG/>
      </div>

       <div>
        <Marquee/>
       </div>

       <div className='xl:max-w-[1280px] w-full reveal fade-bottom'>
        <DownloadApp/>
       </div>

      <div className='reveal fade-bottom'>
        <Footer/>
       </div>
    
    </div>
  )
}

export default App
