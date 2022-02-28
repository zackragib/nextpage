import React from 'react'
import styles from './Courses.module.css'

function Courses({newCount, tutorCount}) {
  return (
      <div className={styles.courses_container}>
          <div className={styles.new_courses}>
              <div className={styles.number}>
                  {newCount}
              </div>
              <div className={styles.new_courses_subtitle}>
                  New Courses
              </div>
          </div>
          <div className={styles.tutors}>
              <div className={styles.tutor_number}>
                  {tutorCount}
              </div>
              <div className={styles.new_courses_subtitle}>
                  New Tutors
              </div>
          </div>
    </div>
  )
}

export default Courses