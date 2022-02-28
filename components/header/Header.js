import React from 'react'
import styles from './Header.module.css'
import Avatar from '@mui/material/Avatar';
import ProfilePic from '../../assets/profile.jpg'
import Image from 'next/image';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
  return (
      <div className={styles.header_container}>
          <div className={styles.greeting}>
            <div>
                <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                sx={{ width: 50, height: 50 }}
                />
            </div>
            <div className={styles.greeting_user}>
                Hi user
            </div>
              
          </div>
          <div className={styles.header_hero_container}>
              <div className={styles.header_hero_title}>
                  <p>Your Perosnal Learning</p>
              </div>
              <div className={styles.header_hero_subtitle}>
                  <p>Based on your preferences</p>
              </div>
          </div>
          
          <div className={styles.header_action_container}>
              <div className={styles.search_box}>
                  <SearchOutlinedIcon sx={{ color: '#000', opacity: '0.1' }} />
                    <input  placeholder='Search for a course'/>
              </div>
              <button className={styles.go_btn}>GO</button>
          </div>
          
    </div>
  )
}

export default Header