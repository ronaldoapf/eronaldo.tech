import React from 'react'
import TextContainer from '../../components/TextContent'
import SocialNavbar from '../../components/SocialNavbar'
import DevelopmentText from '../../components/DevelopmentText'
import styles from './style.module.scss'

const HomePage = () => {
  return (
    <>
      <section className={styles.homeContainer}>
        <figure className={styles.figure}>
          <img src="https://avatars.githubusercontent.com/u/33707685?v=4" />
        </figure>
      </section>

      <TextContainer />
      <SocialNavbar />
      <DevelopmentText />
    </>
  )
}

export default HomePage
