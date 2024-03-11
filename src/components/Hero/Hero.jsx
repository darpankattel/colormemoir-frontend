"use client";
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import heritage from "../../../public/heritage.jpg";
import Button from "@/components/Button/button";
import rate from "../../../public/five_stars.svg";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image src={heritage} alt="homepage photo" className={styles.img} />
      <div className={styles.item}>
        <h1 className={styles.title}>
        Transforming History into Vibrant Memories
        </h1>
        <p className={styles.desc}>
        ColorMemoir turns your black and white memories of Nepal into vibrant, lifelike experiences. Upload your photos and witness the magic of colorization in seconds. Rediscover Nepal's rich heritage with a touch of color.
        </p>
        <div className={styles.rating}>
          <Image src={rate} alt="rate star" className={styles.star} />
          <h5 className={styles.ratingdetail}>2.8M+ Users | Rated 4.9 Stars</h5>
        </div>
        <div className={styles.button}>
        <Button icon={"RiImageAddLine"} url="/colorize" text="Create Colored Photo"  />
        </div>
      </div>
    </div>
  );
};

export default Hero;
