'use client'
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Kathmandu from '../../../public/Kathmandu.jpg'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
          src={Kathmandu}
          fill={true}
          alt="aboutusphoto"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Coloring The Memories</h1>
          <h2 className={styles.imgdesc}>
           Using the AI for Coloring your images
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
