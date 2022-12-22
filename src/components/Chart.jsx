import React from 'react'
import {stonks} from '../assets'

const Chart = () => {
  return (
  <div  id='charts' className='w-full mb-20 flex sm:flex-row flex-col justify-center'>
    <div className='flex sm:flex-row flex-col items-end ml-10'>
   
      <div className='mt-10 sm:mb-20 mb-0 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent font-poppins font-bold text-[42px] leading-15 tracking-wider text-center sm:text-start mr-5'>
        <h1>Exponential growth</h1>
        <h1>over the last decade.</h1>
        <p className='text-[20px] text-dimWhite mt-5 sm:w-[480px]'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

        <video src={stonks}
              autoPlay="{true}" loop muted
              className="relative 
              sm:w-[900px] sm:h-[600px] w-full h-full pt-14 sm:top-10">
          </video>

    </div>
  </div>
  )
}

export default Chart
