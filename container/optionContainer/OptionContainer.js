import React from 'react'
import ContentOption from '../../components/contentOption/ContentOption'
import styles from './OptionContainer.module.css'
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

function OptionContainer() {
  return (
      <div className={styles.options}>
      <ContentOption Icon={GpsFixedOutlinedIcon} title={'Goals'} color='#FC6B21' />
      <ContentOption Icon={CalendarTodayOutlinedIcon} title='Monthly Plan' color='#5531FB' />
      <ContentOption Icon={SettingsOutlinedIcon} title='Settings' color='#1FB9FC' />
      </div>
  )
}

export default OptionContainer