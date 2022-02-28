import Image from 'next/image'
import React from 'react'
import PaginationNumber from '../../components/pagination/PaginationNumber'
import styles from './Illustration.module.css'
import group from '../../assets/group.png'

function Ilustration() {
  return (
    <div className={styles.ilustration_container}>
      <div className={styles.ilustration_numbers}>
        <PaginationNumber number='04' isActive={false} />
        <PaginationNumber number='03' isActive={true} />
        <PaginationNumber number='02' isActive={false} />
        <PaginationNumber number='01' isActive={false}/>
        
      </div>
      <div className={styles.illustration_matter}>
      <div className={styles.illustration_tips}>
      Illustrator Tips & Tricks
        </div>
        <div className={styles.illustration_matter_subtitle}>
        Learn how to create beautiful scenes
in illustrator. Tips and Tricks with real 
life projects and case studies.
        </div>
        <div className={styles.ilustration_people_enroll}>
        121 people enrolled so far!
        </div>
        <div className={styles.ilustration_people_enroll_icon}>
          <Image src={group} alt='people' />
          <p>+115</p>
        </div>
       <div className={styles.enroll_today}>Enrol Today!</div>
      </div>
      
    </div>
  )
}

export default Ilustration