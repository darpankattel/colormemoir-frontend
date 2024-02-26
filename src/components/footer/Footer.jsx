import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&#169; 2024 ColorMemoir. All rights reserved.</div>
      <div className={styles.social} >
      
        <Image src="/1.png" width={15} className={styles.icon}  height={15} alt='' />
        <Image src="/2.png" width={15} className={styles.icon} height={15} alt='' />
        <Image src="/3.png" width={15} className={styles.icon} height={15} alt='' />
        <Image src="/4.png" width={15} className={styles.icon} height={15} alt='' />
      </div>
    </div>
  )
}

export default Footer
