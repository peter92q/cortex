
import { stats } from '../constants'
import styles from '../styles'

const Clients = () => {
  return (
     <section className={`${styles.flexCenter} sm:flex-row flex-col flex-wrap sm:mb-20 mb-20`}>
        {stats.map((stat)=>(
          <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3 `}>
                <h4 className='font-poppins font-semibold text-[30px] sm:text-[45px] xs:leading-[53px] leading-[43px] text-dimWhite'>
                  {stat.value}</h4>
                <p className='font-poppins font-bold tracing-widest sm:text-[25px] text-[20px] text-gradient uppercase ml-3'>{stat.title} </p>
          </div>
        ))}
     </section>
  )
}

export default Clients
