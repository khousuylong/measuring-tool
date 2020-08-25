import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <h1 className={styles.test}>This is H1: Example Component: {text}<h2>And this is h2</h2></h1>
}
