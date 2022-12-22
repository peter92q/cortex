import React from 'react'
import {apple, google, review} from '../assets'


const DownloadApp = () => {
  return (
    <div className='flex flex-row justify-between mt-20'>
        <div className='absolute z-[0] w-[80%] h-[50%] -left-[40%] opacity-70 rounded-full blue__gradient'/>
        <div className='z-[2] flex sm:items-start flex-col items-center justify-center sm:text-left text-center ml-5 sm:ml-10  from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent  font-poppins font-bold sm:text-[38px] text-[24px] tracking-wider'>
            <h1>Try our mobile app</h1>
            <h1>And get 10% off</h1>
            <h1>On your 1st purchase</h1> 
                <div className='flex flex-row mt-5 sm:ml-0 -ml-5'>
                        <img src={apple} className='border-2 border-purple-400 rounded-xl mr-2 cursor-pointer'/>
                        <img src={google} className='border-2 border-purple-400 rounded-xl cursor-pointer'/>     
                </div>
        </div>
         <div className='w-[200px] h-[200px] mt-20 ml-10 sm:block hidden'>
            <img src={review} />
         </div>
              
    <div className='bg-webapp w-[550px] h-[440px] relative z-[1] '/>
    
    <div className='absolute z-[0] w-[30%] h-[50%] left-[70%] opacity-100 rounded-full blue__gradient'/>
    <div className='absolute z-[0] w-[30%] h-[20%] left-[70%] opacity-10 rounded-full pink__gradient'/>
    <div className='absolute z-[0] w-[30%] h-[20%] left-[70%] opacity-10 rounded-full white__gradient'/>
    
    
    </div>
  )
}

export default DownloadApp
