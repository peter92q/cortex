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
    <div className="bg-black w-full overflow-hidden">
      <div className='mb-20'>
        <Navbar/>
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
      <ESG/>
       <div>
       <Marquee/>
       </div>
       <div className='xl:max-w-[1280px] w-full'>
       <DownloadApp/>
       </div>

      <Footer/>
    
    </div>
  )
}

export default App
