"use client";
import React from "react";
import styles from "./page.module.css";

const Buttons = [
  {
    id: 1,
    text: "Light",
  },
  {
    id: 2,
    text: "Flowers",
  },
  {
    id: 3,
    text: "Nature",
  },
  {
    id: 4,
    text: "History",
  },
  {
    id: 5,
    text: "Clothes",
  },
];

const DemoShow = () => {
  return (
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

     
        
     
    </div>
  );
};

export default DemoShow;
