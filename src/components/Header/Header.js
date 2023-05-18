import React from 'react'
import profile from '../../resources/icons/profile.svg'
import cart from '../../resources/icons/cart.svg'
import menu from '../../resources/icons/menu.svg'
import styles from './header.module.css'
const Header = () => {
    const headerOptions = ["home","about","contactus"]
    const iconOptions = [profile,cart,menu]
  return (
    <>
        <div className={styles.headercontainer}>

            
        
        <div className={styles.leftheader}>
        <h4 className={styles.title}>
                northstar
            </h4>
            <ul >
                {headerOptions.map(option=>{
                    return <li className={styles.menuItem}>{option}</li>
                })}
            </ul>
        </div>
        <div className={styles.rightheader}>
           
                {iconOptions.map(option=>{
                    return  <img className={styles.iconItem} src={option} alt="" /> 
                })}
            
        </div>
        </div>
    </>
  )
}

export default Header
