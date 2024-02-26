'use client'
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/Button/button";
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

      <div className={styles.textcontainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
           
          </p>
          <Button text="Contact" url="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
