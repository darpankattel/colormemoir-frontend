"use client";
import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import { useParams } from "next/navigation";
import { useGetResult } from "@/hooks/useGetResult";
import { MAIN_URL } from "@/data/URL";
import { Image } from "antd";
import { Flex, Progress } from "antd";
const page = () => {
  const { id } = useParams();
  console.log(id);
  //   const conversion = {
  //     "name": "khali image",
  //     "input_image": "/media/input_images/27_PCP1kfX.png",
  //     "reference_id": "ZiDgSiG2dQ",
  //     "output_image": "/media/output_images/ZiDgSiG2dQ.jpg",
  //     "created": "2024-02-25T19:02:36.100125Z",
  //     "status": "completed"
  // };
  const { data: conversion, isLoading, isSuccess } = useGetResult({ id });
  const handleDownload = () => {
    const imageUrl = `${MAIN_URL}${conversion?.output_image}`; // Replace this with the actual image URL
    downloadImage(imageUrl);
  };

  const downloadImage = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image"; // You can set the default name for the downloaded image file here

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  return (
    <div className={styles.display}>
      <div className={styles.container}>
        <div className={styles.title}>
          {/* <h2 className={styles.result}>Result</h2> */}
          <div className={styles.progress}>
            <div>
              <h3 className={styles.name}>{conversion?.name}</h3>
            </div>
            <Flex gap={60} wrap="wrap" className={styles.circle}>
              {/* <Progress type="circle" percent={75} /> */}
              <Progress
                type="circle"
                percent={
                  conversion?.loss
                    ? `${Math.round(conversion?.loss * 100 * 100) / 100}`
                    : ""
                }
                status="exception"
              />
              <p className={styles.datatext}>
                <span className={styles.statTitle}>Loss</span>
                <span className={styles.statValue}>
                  {conversion?.loss
                    ? `${Math.round(conversion?.loss * 100 * 100) / 100}%`
                    : ""}
                </span>
              </p>
              <Progress
                type="circle"
                percent={
                  conversion?.accuracy
                    ? `
                    ${Math.round(conversion?.accuracy * 100 * 100) / 100}`
                    : ""
                }
                status="success"
              />
              <p className={styles.datatext}>
                <span className={styles.statTitle}>Accuracy</span>
                <span className={styles.statValue}>
                  {conversion?.accuracy
                    ? `
                    ${Math.round(conversion?.accuracy * 100 * 100) / 100}%`
                    : ""}
                </span>
                
              
              </p>
            </Flex>
          </div>

          {/* <p className={styles.accuracy}>
            {conversion?.accuracy
              ? `Accuracy: ${
                  Math.round(conversion?.accuracy * 100 * 100) / 100
                }%`
              : ""}
          </p> */}
          {/* <p className={styles.loss}>
            {conversion?.loss
              ? `Loss: ${Math.round(conversion?.loss * 100 * 100) / 100}%`
              : ""}
          </p> */}
        </div>
        <div className={styles.photo}>
          <div className={`${styles.prevphoto} ${styles.commonphoto}`}>
            <h3 className={styles.conversionLabel}>Input Photo</h3>
            <Image
              width={500}
              height={"auto"}
              src={`${MAIN_URL}${conversion?.input_image}`}
              styles={styles.image}
            />
          </div>
          <div className={`${styles.nextphoto} ${styles.commonphoto}`}>
            <h3 className={styles.conversionLabel}>Colored Photo</h3>
            <Image
              width={500}
              height={"auto"}
              src={`${MAIN_URL}${conversion?.output_image}`}
              styles={styles.image}
            />
          </div>
        </div>
        <div className={styles.button}>
          <Button
            text={"Download"}
            onClick={handleDownload}
            className={styles.downloadButton}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
