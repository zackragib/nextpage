import Image from 'next/image'
import React from 'react'
import styles from './Tutor.module.css'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

function Tutor({imageUrl, name, designation}) {
  return (
    <div className={styles.tutor_container}>
      <div className={styles.tutor_container_data}>
        <Image src={imageUrl} />
        <div className={styles.tutor_info}>
          <div className={styles.tutor_info_name}>
            {name} 
          </div>
          <div className={styles.tutor_info_designation}>
            {designation}
          </div>
        </div>
        <button><MailOutlineOutlinedIcon sx={{width: '16px', height: '16px', opacity: '0.4'}} /></button>
      </div>
    </div>
  )
}

export default Tutor