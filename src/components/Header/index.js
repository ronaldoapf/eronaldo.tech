import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './style.module.css'

const Header = () => {
  return (
    <header className={classNames('container', styles.header)}>
      <h1>
        Ronaldo
      </h1>

      <nav className={styles.navigation}>
        <Link to="#home">
          Home
        </Link>
        <Link to="#sobre">
          Sobre
        </Link>
      </nav>
    </header>
  )
}

export default Header
