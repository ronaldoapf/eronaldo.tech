import React from 'react'
import Github from '../../assets/svg/github.svg'
import Facebook from '../../assets/svg/facebook.svg'
import Linkedin from '../../assets/svg/linkedin.svg'
import Telegram from '../../assets/svg/telegram.svg'
import Whatsapp from '../../assets/svg/whatsapp.svg'
import Instagram from '../../assets/svg/instagram.svg'
import Curriculum from '../../assets/svg/curriculum.svg'

import styles from './styles.module.scss'

const SocialNavbar = () => {
  return (
    <nav className={styles.socialNavbarContainer}>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.github.com/ronaldoapf">
            <figure>
              <img src={Github} alt="Github icon"/>
            </figure>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/naldinhodido">
            <figure>
              <img src={Facebook} alt="Facebook icon"/>
            </figure>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ronaldoapf">
            <figure>
              <img src={Instagram} alt="Instagram icon"/>
            </figure>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ronaldoapf/">
            <figure>
              <img src={Linkedin} alt="Instagram icon"/>
            </figure>
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://t.me/ronaldoapf">
            <figure>
              <img src={Telegram} alt="Instagram icon"/>
            </figure>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5534991192543">
            <figure>
              <img src={Whatsapp} alt="Instagram icon"/>
            </figure>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1lrSRSM93OgQGBust50-i6VtroZ9qTQbXV2BOdwmvI3Y/edit?usp=sharing">
            <figure>
              <img src={Curriculum} alt="Curriculum icon"/>
            </figure>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SocialNavbar
