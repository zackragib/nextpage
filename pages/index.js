import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MenuItem from '../components/menuItem/MenuItem'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import StatusCard from '../components/statusCard/StatusCard'
import OptionContainer from '../container/optionContainer/OptionContainer'
import Ilustration from '../container/illustration/Ilustration';
import Tutor from '../components/tutor/Tutor';
import Angela from '../assets/angela.png'
import Mike from '../assets/mike.png'
import John from '../assets/john.png'
import Michelle from '../assets/michelle.png'
import RightPannel from '../container/rightPannel/RightPannel';
import { useTheme } from 'next-themes'
import Head from 'next/head';




export default function Home() {

  return (
    <div>
      <Head>
        <title>Ragib Ansari</title>
      </Head>
      <main className={styles.main}>
      <Navbar />
        <Header />
        <div className={styles.main_container}>
         
          <div className={styles.content_left}>
          <div className={styles.main_container_item}>
            <MenuItem Icon={ExploreOutlinedIcon} title={'Explore'} />
            <MenuItem Icon={DashboardOutlinedIcon} title={'Dashboard'} />
            <MenuItem Icon={SettingsOutlinedIcon} title={'My Settings'} />
            <MenuItem Icon={CalendarTodayOutlinedIcon} title={'Course Calendar'} />
            </div>
            <div className={styles.figma_plus}>
              <div className={styles.bolt}>
                <BoltOutlinedIcon sx={{ color: '#fff'}} />
              </div>
              <div className={styles.figma_plus_container}>
                <div className={styles.figma_plus_title}>
                  <p>Figma Plus</p>
                </div>
                <div className={styles.figma_plus_subtitle}>
                  <p>By Figma Love</p>
                </div>
              </div>
            </div>
            <div className={styles.upgrade_box}>
              <div className={styles.upgrade_matter}>
                <div className={styles.upgrade_matter_title}>
                  <p>Upgrade to Pro</p>
                </div>
                <div className={styles.upgrade_matter_subtitle}>
                  <p>Get 1 month free on
annual subscription</p>
                </div>
                <div className={styles.upgrade_matter_today}>
                  <p>Upgrade Today</p>
               </div>
              </div>
            </div>
           
            </div>
          <div className={styles.content_center}>
            <div className={styles.upper_content}>
              <div className={styles.left_column}>
                <div className={styles.left_column_upper}>
                  <StatusCard  status={80}/>
                </div>
                <div className={styles.left_column_lower}>
                  <OptionContainer />
                </div>

              </div>
              <div className={styles.right_column}>
                <Ilustration />
              </div>

            </div>
            <div className={styles.lower_content}>
              <div className={styles.lower_content_title}>
                My Tutors
              </div>
              <div className={styles.tutors_container}>
                <Tutor imageUrl={Angela} name='Angela Taylor' designation='Senior PHP Developer' />
                <Tutor imageUrl={Mike} name='Mike Tylor' designation='Team Lead at Google' />
                <Tutor imageUrl={John} name='John Doe' designation='Ui Designer at Uber' />
                <Tutor imageUrl={Michelle} name='Michelle Gundz' designation='Python Developer'/>
               
              </div>
            </div>
          </div>
          <div className={styles.content_right}>
          <RightPannel />
          </div>
        </div>
      </main>
     
   </div>
  )
}
