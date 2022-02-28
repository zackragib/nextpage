import React from 'react'
import DropDowns from '../../components/dropDowns/DropDowns'
import RightNav from '../../components/rightNav/RightNav'
import Courses from '../courses/Courses'
import MasterFigma from '../masterFigma/MasterFigma'
import UiWith from '../uiwithmiky/UiWith'
import styles from './RightPannel.module.css'

function RightPannel() {
  return (
      <div>
      <RightNav />
      <DropDowns />
      <MasterFigma />
      <Courses newCount='19' tutorCount='14' />
      <UiWith />
    </div>
  )
}

export default RightPannel