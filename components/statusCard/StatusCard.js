import React from 'react'
import styles from './StatusCard.module.css'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import ProgresBar from '../progresbar/ProgresBar';

function StatusCard({status}) {
  return (
      <div className={styles.statusCard}>
          <div className={styles.upper_head}>
              <LocalFireDepartmentOutlinedIcon />
              <p>Manage Goals</p>
          </div>
          <div className={styles.goal_staus}>
              <p>Goal Status</p>
      </div>
      <div className={styles.goal_percentage}>
        <p>Goals</p>
        <p>{`${status}%`}</p>
      </div>
      <div className={styles.progress_bar_container}>
        <ProgresBar width={status}/>
      </div>
      
         
          
    </div>
  )
}

export default StatusCard