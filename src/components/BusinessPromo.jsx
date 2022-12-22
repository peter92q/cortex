import {cards} from '../assets'
import React from 'react'
import '../index.css'


const BusinessPromo = () => {

  return (
    <div className="my-20 mx-10 flex sm:flex-row flex-col-reverse justify-between items-center">
          <div className='absolute w-[30%] h-[60%] left-[65%] rounded-full blue__gradient'/>
        <div className='flex flex-col mb-10'>
            <div className="sm:w-[400px] w-[300px] mb-2 table bg-gray-gradient rounded-lg sm:ml-2 -ml-2 hover:bg-dimWhite duration-500">
                <h1 className='text-gradient2 font-poppins sm:text-[22px] text-[20px] sm:pl-0 pl-9 mt-5 w-[400px] font-bold ml-5 tracking-widest'>Two year warranty</h1>
                <p className='text-gradient2 mx-4 sm:text-[15px] text-[15px] sm:w-[350px] w-[350px] sm:pl-0 pl-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo sinus gratis elso donre kapo.</p>
                <div className='flex items-end sm:justify-end justify-center relative -top-[70px] sm:mr-5 sm:-ml-70 ml-[340px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500"> <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /> </svg>
                </div>
            </div>
            <div className="sm:w-[400px] w-[300px] mb-2 table bg-gray-gradient rounded-lg sm:ml-2 -ml-2 hover:bg-dimWhite duration-500">
                <h1 className='text-gradient2 font-poppins sm:text-[22px] text-[20px] sm:pl-0 pl-9 mt-5 w-[400px] font-bold ml-5 tracking-widest'>Premium membership</h1>
                <p className='text-gradient2 mx-4 sm:text-[15px] text-[15px] sm:w-[350px] w-[350px] sm:pl-0 pl-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium<br/> totam rem aperiam, eaque ipsa quae ab illo.</p>
                <div className='flex items-end sm:justify-end justify-center relative -top-[70px] sm:mr-5 sm:-ml-70 ml-[340px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                </div>
            </div>
            <div className="sm:w-[400px] w-[300px] mb-2 table bg-gray-gradient rounded-lg sm:ml-2 -ml-2 hover:bg-dimWhite duration-500">
                <h1 className='text-gradient2 font-poppins sm:text-[22px] text-[20px] sm:pl-0 pl-9 mt-5 w-[400px] font-bold ml-5 tracking-widest'>Exclusive offers</h1>
                <p className='text-gradient2 mx-4 sm:text-[15px] text-[15px] sm:w-[350px] w-[350px] sm:pl-0 pl-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium<br/> totam rem aperiam, eaque ipsa quae ab illo.</p>
                <div className='flex items-end sm:justify-end justify-center relative -top-[70px] sm:mr-5 sm:-ml-70 ml-[340px]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>

                </div>
            </div>
        </div>

        <img src={cards} alt="card" className='h-[300px]' />
        
        <div className='from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent z-[1] sm:text-left text-center sm:mb-20 mb-10'>
            <h1 className='font-poppins font-bold text-[42px] sm:leading-15 leading-11'>You do the business</h1>
            <h1 className='font-poppins font-bold text-[42px] sm:leading-15 leading-11'>we'll handle</h1>
            <h1 className='font-poppins font-bold text-[42px] sm:leading-15 leading-11'>the rest</h1>
            <p className='text-dimWhite font-poppins text-[17px] mt-5 sm:w-[400px] w-[350px] sm:ml-0 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className='w-[150px] h-[50px] bg-black-gradient-2 flex items-center justify-center rounded-3xl sm:mt-10 sm:m-0 mt-5 m-auto hover:opacity-50 cursor-pointer'><p className='text-purple-500 text-[20px] font-bold tracing-wider'>Get Started</p></div>
        </div>
         
    </div>
    
  )
}

export default BusinessPromo
