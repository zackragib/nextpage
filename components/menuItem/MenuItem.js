import React from 'react'
import styles from './MenuItem.module.css'

function MenuItem({Icon, title}) {
  return (
    <div className={styles.item}>
      <Icon sx={{ color: '#000', opacity: '0.5' }}/>
      <h4>{title }</h4>
    </div>
  )
}

export default MenuItem