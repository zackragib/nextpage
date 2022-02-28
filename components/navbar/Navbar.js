import React from 'react'
import styles from './Navbar.module.css'
import Users from '../../assets/Users.png'
import Image from 'next/image'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function Navbar() {
  return (
      <div className={styles.navbar_container}>
          <div className={styles.logo}>
          <div className={styles.logo_title}>
          <p>Learn.io</p>
          </div>  
          <div className={styles.logo_sub_title}>
              <p>Improved Learning</p>
              </div> 
      </div>
      <div className={styles.image_icon_container}>
        <Image src={Users} alt='Image'/>
      </div>
      <div className={styles.notif_icon_container}>
        <div className={styles.notif_icons}>
          <PersonOutlineIcon />
          <NotificationsOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Navbar