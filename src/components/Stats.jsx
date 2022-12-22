import React from 'react'

const LabsBar = () => {
  return (
    <div className='flex flex-row justify-center mt-20'>
     <div className="relative group">
      
      <div className="sm:flex-row flex-col sm:w-[550px] w-[300px] animate-tilt absolute inset-2 opacity-50 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl font-poppins group-hover:opacity-80 transition duration-1000"></div>
      <button className='relative sm:flex-row flex-col sm:w-[550px] w-[300px] px-7 py-4 bg-black-gradient-3 rounded-lg leading-none flex items-center justify-center sm:divide-x divide-gray-600'>
        <span className="flex items-center space-x-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-500 -rotate-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
        <span className='text-dimWhite pr-16 tracking-wide text-bold'> Labs Release 2022 </span>
        </span>
        <span className='text-dimWhite pl-16 transition duration-200 tracking-wide text-bold'> See What's New &rarr; </span>
      </button>
      </div>
    </div>
  )
}

export default LabsBar
