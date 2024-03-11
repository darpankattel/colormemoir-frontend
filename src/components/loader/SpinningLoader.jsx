import React, { useEffect } from 'react'
import { Spin } from 'antd';
import styles from './page.module.css'
import ColorfulLoadingImage from "../../../public/loading-image.gif";
import Image from 'next/image'

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
            {/* <Spin tip={text} size="large" wrapperClassName={styles.loadingWrapper} /> */}
            <Image src={ColorfulLoadingImage} alt="loader" className={styles.loadingImage} />
            <p className={styles.loadingText}>{text}</p>
        </div>
    </div>
  )
}

export default SpinningLoader