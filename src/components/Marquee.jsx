import React from 'react'
import "../index.css"
import {comp8,comp9,comp10,comp11,comp12,comp13,comp14,comp15,comp16,comp17,comp18,comp19,comp20,comp21,comp22,comp23,comp24,comp25} from '../assets'

const Marquee = () => 
  (
    <div className='sm:flex-col w-full sm:mt-0 mt-[10vh]'>
    <article class="flex whitespace-no-wrap overflow-x-hidden">
        <div class="relative">
            <ul className="flex animate-marquee text-white">
            <li className="sm:m-8 m-1"><img src={comp8} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp9} className='w-[120px] h-[95px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp10} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp11} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp12} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp13} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp20} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp22} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp23} className='w-[120px] h-[65px]'/></li>
            </ul>
        </div>
    </article>
    <article class="flex whitespace-no-wrap overflow-x-hidden">
        <div class="relative2">
            <ul className="flex animate-marquee2 text-white">
            <li className="sm:m-8 m-1"><img src={comp14} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp15} className='w-[120px] h-[95px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp16} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp17} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp18} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp19} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp21} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp24} className='w-[120px] h-[65px]'/></li>
            <li className="sm:m-8 m-1"><img src={comp25} className='w-[120px] h-[65px]'/></li>
            </ul>
        </div>
    </article>
    </div>
  )


export default Marquee
