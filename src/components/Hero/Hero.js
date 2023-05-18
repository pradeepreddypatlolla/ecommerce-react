import React from 'react'
import styles from './hero.module.css'

import man from '../../resources/images/Niche service marketplace-pana.svg'
import women from '../../resources/images/Niche service marketplace-bro.svg'
const Hero = () => {
  return (
    <div className={styles.herocontainer}>
        
        <div className={styles.mandiv}>
            <img src={man} alt="" />
            <div className={styles.btndiv}>
              <button className='btn'>  For Him </button> 
            </div>
        </div>
        <div className={styles.womendiv}>
            <img src={women} alt="" />
            <div className={styles.btndiv}>
            <button className='btn'>  For Her </button> 
            </div>
        </div>
        {/* <div className={styles.text}>
           <p className={styles.maintext}> northstar. </p> 
        <p className={styles.subtext}>Single stop destination for latest fashion. Both for men and women </p>
          <div><button className='btn'>Shop</button></div> 
        </div>
        <div className={styles.heroImage}> 

       <img src={hero} alt="" />
        </div> */}
    </div>
  )
}

export default Hero
