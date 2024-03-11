"use client";
import React, {useState} from "react";
import styles from "./about.module.css";
import Image from "next/image";
import darpan from "../../../public/developer/20240218_123506.jpg";
import bishnu from "../../../public/developer/420576288_965497768418555_8451520561355716310_n.jpg";
import vivek from "../../../public/developer/376552566_1494094581358479_2711768330671493501_n.jpg";
import ShowQr from "./qr.jsx";

const about = () => {
  const [showQR, setShowQR] = useState(false);
  const handleShowQR = () => {
    setShowQR(!showQR);
  }
  return (
    <div className={styles.display}>
      {showQR && <ShowQr handleShowQR={handleShowQR} />}
      <div className={styles.container}>
        <div className={styles.desc}>
          <h5 className={styles.note}>How it Started</h5>
          <h1 className={styles.title}>
            The Story
          </h1>

          <p className={styles.text}>
          We are a team of engineering students from IOE Pulchowk Campus, Nepal, driven by a shared passion for innovation and technology. The inception of this website stemmed from a nostalgic moment when one of our team members recalled manually coloring his great-grandparent's image in Photoshop. Inspired by this experience, the idea was pitched during a discussion on minor project titles and was enthusiastically accepted. From that moment, we embarked on a journey to develop a user-friendly platform for image colorization, blending modern technology with personal sentiment.
          </p>
          <button className={styles.donateButton} onClick={handleShowQR}>Donate</button>
        </div>
        <div className={styles.productbox}>
          <div className={styles.product}>
            <div className={styles.imgcontainer}>
              <div className={styles.devdetail}>
                <Image
                  src={darpan}
                  alt="darpan"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <label htmlFor="name" className={styles.label}>
                  Darpan Kattel
                </label>
              </div>
              <div className={styles.devdetail}>
                <Image
                  src={bishnu}
                  alt="Bishnu"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <label htmlFor="name" className={styles.label}>
                  Bishnu Datt Badu
                </label>
              </div>
              <div className={styles.devdetail}>
                <Image
                  src={vivek}
                  alt="Vivek"
                  width={200}
                  height={200}
                  className={styles.img}
                />
                <label htmlFor="name" className={styles.label}>
                  Bibek Sunar
                </label>
              </div>
            </div>
          </div>

          <div className={styles.ratings}>
            <div className={styles.ratingbox}>
              <span className={styles.rating}>3.5</span>
              <p className={styles.subdesc}>Year Experince</p>
            </div>
            <div className={styles.ratingbox}>
              <span className={styles.rating}>23</span>
              <p className={styles.subdesc}>Project Challenge</p>
            </div>
            <div className={styles.ratingbox}>
              <span className={styles.rating}>2+</span>
              <p className={styles.subdesc}>Happy Clients</p>
            </div>
            <div className={styles.ratingbox}> <span className={styles.rating}>100</span>
              <p className={styles.subdesc}>Loved</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
