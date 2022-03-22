import React, {useState} from 'react'
import styles from './Dropdown.module.css'
import RocketGirl from '../../assets/RocketGirl.png'
import Image from 'next/image';

function Dropdown() {
    const [openDropDown, setOpenDropDown] = useState(true);
    const clickAction = () => {
        if (openDropDown) {
            setOpenDropDown(false)
        } else {
            setOpenDropDown(true)
        }
        console.log('Click working')
    } 
    return (
      <>
      <div className={styles.nav}>
       
          <div className={styles.dropdown}>
              <button className={styles.dropbtn} onClick={() => clickAction()}>Dropdown</button>
              {openDropDown && 
               <div className={styles.dropdown_content}>
               <a href="#home">Home</a>
               <a href="#about">About</a>
               <a href="#contact">Contact</a>
             </div>
              }
 
          </div>
         
            </div>

             
          <div className={styles.postion_test}>
                <div className={styles.box}>
                    
                </div>
                <div className={styles.box}>
                    <div className={styles.sub_box}>
                        
            </div>
            <p className={styles.up}>asdf</p>
                </div>
          <div className={styles.box}>
           
               abc    
                </div>
                <div className={styles.box}>
                    
                </div>
                
        </div>
        
        <div className={styles.container}>
          <div className={styles.heading}>
            Abcdefghijkl
          </div>
          <div className={styles.girl}>
            <Image  src={RocketGirl} alt='Rocket Girl'/>
          </div>
        </div>
            </>
  )
}

export default Dropdown