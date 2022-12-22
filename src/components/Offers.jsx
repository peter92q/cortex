import React from 'react'
import {Items, Items2, Items3} from '../constants'
import '../index.css'
import {useState} from 'react'

const Offers = () => {
const [show, setShow] = useState('')
const [show2, setShow2] = useState('hidden')
const [show3, setShow3] = useState('hidden')
const showHandler = () =>{
  setShow('')
  setShow2('hidden')
  setShow3('hidden')
}
const showHandler2 = () =>{
  setShow('hidden')
  setShow2('')
  setShow3('hidden')
}
const showHandler3 = () =>{
  setShow('hidden')
  setShow2('hidden')
  setShow3('')
}


return(
    <div id='products'>
      <div className='flex flex-row justify-end mr-10 relative top-10 z-[1]'>
          <input onClick={showHandler} type="radio" value="option1" checked={show!=='hidden'} className='sm:m-2 mr-10'/>
          <input onClick={showHandler2} type="radio" value="option2" checked={show2!=='hidden'} className='sm:m-2 mr-10'/>
          <input onClick={showHandler3} type="radio" value="option3" checked={show3!=='hidden'} className='sm:m-2 mr-10'/>
      </div>
    <div className='flex flex-row whitespace-no-wrap overflow-x-hidden bg-grid z-[0]'>
      
      <div className={`grid sm:grid-cols-3 grid-cols-2 gap-x-1 mb-20 ${show} sidebar2 `}>
        {Items.map((item)=>(
          <div className={`flex flex-col justify-center mt-20 mx-10 grow grow:hover cursor-pointer`}>
            <div className=''>
                <h4  className={`bg-black-gradient-2  rounded-t-md pl-2 font-poppins tracking-widest text-dimWhite font-bold`} >{item.title}</h4>        
                <div className='flex justify-end  '>
                  <p className='bg-gradient-to-r from-green-600 via-teal-400 to-green-600 absolute text-white mr-1 px-1 mt-2 rounded-md font-poppins'>{item.promo}</p>
                </div>
                  <img src={item.img}  className='sm:w-[450px] sm:h-[230px] h-[20vh] w-[40vw]  rounded-b-md '/> 
            </div>
          </div>
        ))}
      </div>
      <div className={`grid sm:grid-cols-3 grid-cols-2 gap-x-1 mb-20 ${show2} sidebar2`}>
        {Items2.map((item2)=>(
          <div className={`flex flex-col justify-center mt-20 mx-10 grow grow:hover cursor-pointer`}>
            <div className=''>
                <h4  className={`bg-black-gradient-2 rounded-t-md pl-2 font-poppins tracking-widest text-dimWhite font-bold`} >{item2.title}</h4>        
                <div className='flex justify-end '>
                  <p className='bg-gradient-to-r from-teal-600 via-teal-400 to-teal-900 absolute text-white mr-1 px-1 mt-2 rounded-md font-poppins'>{item2.promo}</p>
                </div>
                  <img src={item2.img}  className='sm:w-[450px] sm:h-[230px] h-[20vh] w-[40vw] rounded-b-md'/> 
            </div>
          </div>
        ))}
      </div>
      <div className={`grid sm:grid-cols-3 grid-cols-2 gap-x-1  mb-20 ${show3} sidebar2`}>
        {Items3.map((item3)=>(
          <div className={`flex flex-col justify-center mt-20 mx-10 grow grow:hover cursor-pointer`}>
            <div className=''>
                <h4  className={`bg-black-gradient-2 rounded-t-md pl-2 font-poppins tracking-widest text-dimWhite font-bold`} >{item3.title}</h4>        
                <div className='flex justify-end '>
                  <p className='bg-gradient-to-r from-teal-600 via-teal-400 to-teal-900 absolute text-white mr-1 px-1 mt-2 rounded-md font-poppins'>{item3.promo}</p>
                </div>
                  <img src={item3.img}  className='sm:w-[450px] sm:h-[230px] h-[20vh] w-[40vw] rounded-b-md'/> 
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    )}
export default Offers



