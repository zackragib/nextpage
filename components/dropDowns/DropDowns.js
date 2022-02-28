import React from 'react'
import styles from './DropDowns.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function DropDowns() {
  return (
      <div className={styles.dropdown_container}>
          <div className={styles.dropdown}>
              <div className={styles.dropdown_title}>
                  Price
              </div>
        <div className={styles.dropdown_indicator}>
          
            <ArrowDropDownIcon sx={{width:'24px', marginRight: '10px'}} />
      
            </div>
          </div>
          <div className={styles.dropdown}>
          <div className={styles.dropdown_title}>
                  Duration
              </div>
        <div className={styles.dropdown_indicator}>
          
            <ArrowDropDownIcon sx={{width:'24px', marginRight: '10px'}} />
      
            </div>
          </div>
    </div>
  )
}

export default DropDowns