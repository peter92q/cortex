import React from 'react'
import {video} from '../assets'


const VideoPromo = () => {

  return (
    <div className='mx-20 mt-40 pb-20 relative flex justify-center sm:items-start items-center sm:flex-row flex-col'>
     <div className='absolute z-[0] w-[80%] h-[80%] right-[10%] rounded-full blue__gradient'/>
      <div>
       <video className='sm:w-[450px] w-[350px] sm:h-[250px] h-[250px] rounded-xl' autoPlay muted loop  >
         <source src={video} type="video/mp4"/>
       </video>
      </div>
       <div className=' ml-5 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent mb-10 '>
          <h1 className='font-poppins text-[25px] font-bold tracking-wider '>Take part in making history</h1>
          <p className='text-dimWhite sm:w-[450px] w-[400px] font-poppins'> Massa enim nec dui nunc mattis enim ut tellus elementum. Morbi tristique senectus et netus et malesuada fames ac. Feugiat nisl pretium fusce id velit ut tortor pretium. Amet dictum sit amet justo donec. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Justo nec ultrices dui sapien eget mi.</p>
       </div> 
       <div className='z-[1] w-[100px] h-[100px] text-purple-500  border-2 cursor-pointer border-purple-800 rounded-full font-poppins flex items-center justify-center hover:border-dimWhite hover:text-dimWhite'>
          <h2 className='text-[15px] tracking-widest'>Learn<br/>More</h2>
       </div>
    </div>
  )
}

export default VideoPromo
