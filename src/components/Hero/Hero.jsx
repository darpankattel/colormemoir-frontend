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
          Better to turn your past into colorful life
        </h1>
        <p className={styles.desc}>
          Upload your photo, pick your unique filter, and watch your moment
          transform with vibrant, lifelike colors in seconds.
        </p>
        <div className={styles.rating}>
          <Image src={rate} alt="rate star" className={styles.star} />
          <h5 className={styles.ratingdetail}>2.8M+ Users | Rated 4.9 Stars</h5>
        </div>
        <Button url="/colorize" text="Create Colored Photo" />
      </div>
    </div>
  );
};

export default Hero;
