'use client'
import React from 'react'
import Button from '../Button/Button'
import styles from './page.module.css'

const Howmany = () => {
  return (
    <div className={styles.container} >
      <h1 className={styles.title} > +1 Million Photos Already Colorized </h1>
      <Button  text="Create Colored Photo" url='/' classname={styles.click} />
    </div>
  )
}

export default Howmany
