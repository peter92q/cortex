import {reacticon, burger, ex} from '../assets'
import {Links} from '../constants'
import '../index.css'
import {useState} from 'react'


const Navbar = () => {

 const [toggle, setToggle] = useState(false)
 const [menu, setMenu] = useState(false)
 const [menuTwo, setMenuTwo] = useState(false)



 return(  
       
        <nav id='navigation'>
          
          <div className='absolute z-[3] -left-0 top-0 w-[40%] h-[30%] rounded-full white__gradient'/>
          
          
            <div className='w-full sm:flex flex py-3 justify-between items-center navbar'>
                <div className='flex justify-start items-center ml-3'>
                   <img src={reacticon} className='sm:h-[40px] h-[30px] animate-spin-slow'/>
                   <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent sm:text-6xl text-4xl font-audio font-bold">CORTEX</h1>
                </div>
                <ul className='list-none sm:hidden lg:flex hidden items-center'>
                  {Links.map((link,index)=>(
                    <div key={link.id} className={`${link.menu}`}>
                      <div >
                          <li
                          className={`text-dimWhite hover:text-white font-poppins 
                          tracking-widest text-bold text-[17px] px-4 pb-1 dropbtn
                          ${index === Links.length -1 ? 'mr-[55px]':'mr-0'}`}>
                            <a href={`#${link.id}`}>{link.title} <i className={`${link.icon}`}></i></a>
                          </li>
                        </div>
                      <div className='dropdown-content hidden'>
                        <div className='z-[1] h-[150px] w-[100px] absolute bg-black-gradient rounded-md flex flex-col items-center'>
                          <h4 className='text-dimWhite'>menu item</h4>
                        </div> 
                      </div>
                      <div className='dropdown-contentTwo hidden'>
                        <div className='z-[1] h-[150px] w-[100px] absolute bg-black-gradient rounded-md flex flex-col items-center'>
                          <h4 className='text-dimWhite'>The item</h4>
                        </div> 
                      </div>
                    </div>
                    ))}
                </ul>
                
                <img src={`${toggle ? ex : burger}`} onClick={(()=>setToggle(prev=>!prev))} className='sm:flex lg:hidden flex h-[30px] mr-5 filter-purple cursor-pointer'/>            
            </div>
            <div className={`${toggle ? 'flex' : 'hidden'} 
                    p-6 bg-black-gradient absolute 
                    top-30 right-0 mx-1 my-1 min-w-[140px] h-[240px]
                    rounded-xl lg:hidden sidebar`}>
                    <ul className='flex flex-col items-center justify-center'>
                        {Links.map((link)=>(
                        <div key={link.id}>
                          <li className={`text-dimWhite hover:text-white font-poppins text-semibold text-[16px] p-2 `}><a href={`#${link.id}`} onClick={()=>setToggle(prev=>!prev)}>{link.title}</a></li>
                        </div>
                        ))}
                    </ul>
            </div>
            
          </nav>
  )

}
export default Navbar
