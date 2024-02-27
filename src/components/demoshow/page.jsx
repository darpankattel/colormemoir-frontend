"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import first from '../../../public/category/nepal1_20190607190404.jpg'
import second from '../../../public/category/Family_of_Birendra1640845934_1024.jpg'
import third from '../../../public/category/images (1).jpg'
import fouth from '../../../public/category/dress_20180702130652.jpg'
import fifth from '../../../public/category/Patan-Durbar-Square.jpg'

const Buttons = [
  {
    id: 1,
    text: "Nepal Landscape",
  },
  {
    id: 2,
    text: "People in General",
  },
  {
    id: 3,
    text: "Animal",
  },
  {
    id: 4,
    text: "Nepali Culture & Customs",
  },
  {
    id: 5,
    text: "Historical Places",
  },
];
const demoPhoto = [
  {
    id: 1,
    img: first,
    title: "Nepal Landscape",
    desc: "Explore the breathtaking beauty of Nepal's diverse landscapes, from the majestic Himalayas to serene lakes and lush valleys.",
  },
  {
    id: 2,
    img: second,
    title: "People in General",
    desc: "Discover the vibrant tapestry of Nepali society through candid snapshots of people from various walks of life, capturing their daily routines, traditions, and moments of joy.",
  },
  {
    id: 3,
    img:third,
    title: "Animal",
    desc: "Delve into the rich biodiversity of Nepal with images showcasing its diverse fauna, including native species of mammals, birds, reptiles, and more.",
  },
  {
    id: 4,
    img:fouth,
    title: "Nepali Culture & Customs",
    desc: "Immerse yourself in the rich tapestry of Nepali culture, traditions, and customs, depicted through colorful festivals, rituals, and cultural practices that have been passed down through generations.",
  },
  {
    id: 5,
    img: fifth,
    title: "Historical Places",
    desc: "Journey through time and explore Nepal's rich history and heritage with glimpses of ancient temples, palaces, monuments, and archaeological sites that bear testimony to its glorious past.",
  },
];


const DemoShow = () => {
  return (
    <div className={styles.display}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}> Experience The Difference</h1>
        </div>
        <div className={styles.buttons}>
          {Buttons.map((button_) => (
            <button key={button_.id} className={styles.button_s}>
              {button_.text}
            </button>
          ))}
        </div>
        <div className={styles.demoimages}>
          {demoPhoto.map((demo) => (
            <div className={styles.item} key={demo.id}>
              <div className={styles.content}>
                <h1 className={styles.title}>{demo.title}</h1>
                <p className={styles.desc}>{demo.desc}</p>
              </div>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src={demo.img}
                  fill={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoShow;
