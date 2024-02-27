"use client";
import React from "react";
import Button from "../Button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import group from "../../../public/Group.jpg";

const Howmany = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
          src={group}
          fill={true}
          alt="Group Imgages"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.title}>
            {" "}
            +1 Million Photos Already Colorized{" "}
          </h1>
          <Button
            text="Create Colored Photo"
            url="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Howmany;
