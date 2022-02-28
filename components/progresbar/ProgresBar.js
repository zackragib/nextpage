import React from 'react'
import styles from './ProgressBar.module.css'

function ProgresBar({width}) {
  return (
      <div>
          <div className={styles.progress_bar}>
            <div className={styles.progress} style={{'width': `${width}%`}}>
            </div>
        </div>
    </div>
  )
}

export default ProgresBar