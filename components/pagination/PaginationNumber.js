import React from 'react'
import styles from './PaginationNumber.module.css'

function PaginationNumber({number, isActive}) {
  return (
      <div className={isActive ? styles.number_active : styles.number_inActive}>
          {number}
      </div>
  )
}

export default PaginationNumber