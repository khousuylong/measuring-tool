import React from 'react'
import styles from '../styles.module.css'
import { Button } from '@material-ui/core';

const AdminSearch = ({ text }) => {
  return(
    <div>
      <h1 className={styles.test}>This is H1: Example Component: {text}</h1>
      <Button color="primary">Hello World</Button>
    </div>
  )
}

export default AdminSearch;