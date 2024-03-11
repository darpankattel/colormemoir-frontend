"use client";
import React, { useEffect } from 'react'
import styles from './qr.module.css'
import DarpanQRImage from "../../../public/qr/darpan-qr.jpg";
import Image from "next/image";

const qr = ({handleShowQR}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])
  return (
    <>
    <div className={styles.clicker} onClick={handleShowQR}></div>
    <div className={styles.qrContainer}>
        <div className={styles.qr}>
            <Image src={DarpanQRImage} alt="qr" className={styles.qrImage} />
        </div>
    </div>
    </>
  )
}

export default qr