import React from 'react'
import styles from './MasterFigma.module.css'
import masterfigma from '../../assets/masterfigma.png'
import Image from 'next/image'

function MasterFigma() {
  return (
      <div className={styles.masterFigma_container}>
          <div className={styles.masterFigma_icon_container}>
            <Image src={masterfigma} />
          </div>
          <div className={styles.course_detail_container}>
              <div className={styles.duration}>
                  <p>42 Hours &#8226; $199.00</p>
              </div>
              <div className={styles.title}>
                  Master Figma
              </div>
              <div className={styles.subtitle}>
              Learn Figma in 30 days.
              </div>
              <div className={styles.enroll_today}>
              Enroll Today!
              </div>
          </div>
    </div>
  )
}

export default MasterFigma