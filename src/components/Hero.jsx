import React from 'react'
import { nobg } from '../assets'
import '../index.css'

const Hero = () => {
  return (
    <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col sm:justify-between justify-center sm:text-left text-center sm:mx-60 mx-10'>
      <div className='mt-20 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
        <h1 className='font-poppins  font-bold sm:text-[42px] text-[38px] leading-9'>Innovative</h1><br/> 
        <h1 className='font-poppins  font-bold sm:text-[42px] text-[38px] leading-9'>semiconductor</h1><br/> 
        <h1 className='font-poppins  font-bold sm:text-[42px] text-[38px] leading-9'>solutions</h1>
        <p className='text-dimWhite font-poppins sm:text-[17px] text-[16px] mt-5 lg:w-[400px] sm:w-[350px] xs-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
         <img src={nobg} className='sm:h-[450px] h-[350px] mt-10'/>
         
    </div>
  )
}

export default Hero
