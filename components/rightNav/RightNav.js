import React from 'react'
import styles from './RightNav.module.css'

function RightNav() {
  return (
      <div className={styles.rightNav_container}>
          <ul>
              <li className={styles.rightNav_container_active}>New Course</li>
              <li className={styles.rightNav_container_inActive}>Library</li>
              <li className={styles.rightNav_container_inActive}>Categories</li>
          </ul>
    </div>
  )
}

export default RightNav