import React, { useEffect } from 'react'
import { Spin } from 'antd';
import styles from './page.module.css'

const SpinningLoader = ({text="Loading..."}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])
  return (
    <div className={styles.loaderContainer}>
        <div className={styles.content}>
            <Spin tip={text} size="large" wrapperClassName={styles.loadingWrapper} />
            <p className={styles.loadingText}>{text}</p>
        </div>
    </div>
  )
}

export default SpinningLoader