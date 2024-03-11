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
          <h2 className={styles.title}>
            {" "}
            +1 Thousand Photos Already Colorized
          </h2>
          <Button
            text="Create Colored Photo"
            url="/colorize"
            className={styles.button}
            icon={"RiImageAddLine"}
          />
        </div>
      </div>
    </div>
  );
};

export default Howmany;
