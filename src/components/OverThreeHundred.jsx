
import { stats } from '../constants'
import styles from '../styles'

const Clients = () => {
  return (
     <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-20`}>
        {stats.map((stat)=>(
          <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3 `}>
                <h4 className='font-poppins font-semibold xs:text-[40px] md:text-[10px] lg:text-[45px] xs:leading-[53px] leading-[43px] text-dimWhite'>
                  {stat.value}</h4>
                <p className='font-poppins font-bold tracing-widest sm:text-[25px] text-[14px] xs:leading-[26px] text-gradient leading-[21px] uppercase ml-3'>{stat.title} </p>
          </div>
        ))}
     </section>
  )
}

export default Clients
