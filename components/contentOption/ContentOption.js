import React from 'react'
import styles from './ContentOption.module.css'


function ContentOption({Icon, title, color}) {
  return (
      <div className={styles.option}>
          <div className={styles.title_container}>
          <div className={styles.circle_icon}>
              <Icon sx={{ color: {color}, width: '16.44px',
height: '16.24px' }} />
               
              </div>
        <p>{title}</p> 
          </div>
          <button>&gt;</button>
          
    </div>
  )
}

export default ContentOption