import React from 'react'
import styles from './styles.module.scss'

const TextContent = () => {
  return (
    <section className={styles.textContextContainer}>
      <h1 className={styles.title}>
        Ronaldo Alves
      </h1>

      <p className={styles.text}>
        Estudante de Sistemas de Informação na Universidade Federal de Uberlândia.
        Desenvolvedor Front-End na eNe Soluções.
      </p>
    </section>
  )
}

export default TextContent
