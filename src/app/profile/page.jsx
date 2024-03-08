"use client";
import React, { useState, useEffect } from "react";
import { Table, Tag, Image as AntdImage } from "antd";
import styles from "./page.module.css";
import Image from "next/image";
import { IoIosLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { getFormattedDateTime } from "@/utils/utils";
import { useGetProfile } from "@/hooks/useGetProfile";
import { MAIN_URL } from "@/data/URL";
import { Flex, Input } from "antd";
const { TextArea } = Input;
const onChange = (e) => {
  console.log("Change:", e.target.value);
};

const columns = [
  {
    title: "Id",
    dataIndex: "reference_id",
    key: "reference_id",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "reference_id",
    //   render: (text) => <a>{text}</a>,
  },
  {
    title: "Input Image",
    dataIndex: "input_image",
    key: "reference_id",
    render: (input_image) => (
      <AntdImage width={100} height={100} src={`${MAIN_URL}${input_image}`} />
    ),
  },
  {
    title: "Output Image",
    dataIndex: "output_image",
    key: "reference_id",
    render: (output_image) =>
      output_image ? (
        <AntdImage
          width={100}
          height={100}
          src={`${MAIN_URL}${output_image}`}
        />
      ) : (
        "--"
      ),
  },
  {
    title: "Loss / Accuracy",
    dataIndex: "loss",
    key: "reference_id",
    render: (loss, record) => <span>
      {loss ? `${Math.round(loss * 100 * 100) / 100}%` : "--"} / {record?.accuracy ? `${Math.round(record.accuracy * 100 * 100) / 100}%` : "--"}
    </span>,
  },
  {
    title: "Created Date",
    dataIndex: "created",
    key: "reference_id",
    render: (created) => <span>{getFormattedDateTime(created)}</span>,
  },
  {
    title: "Status",
    key: "reference_id",
    dataIndex: "status",
    render: (status) => (
      <Tag
        color={
          status === "pending"
            ? "yellow"
            : status === "completed"
            ? "green"
            : "red"
        }
      >
        {status.toUpperCase()}
      </Tag>
    ),
  },
];

const Profile = () => {
  const { data: profileData, isFetching, error } = useGetProfile();
  const [user, setUser] = useState({});
  const [photoConversions, setPhotoConversions] = useState([]);

  useEffect(() => {
    if (profileData) {
      setUser(profileData.user);
      setPhotoConversions(profileData.conversions);
    }
  }, [profileData]);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.leftProfile}>
          <div className={styles.imageContainer}>
            <Image
              src={
                "https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg"
              }
              alt=""
              width={"160"}
              height={"160"}
              className={styles.image}
            />
          </div>

          <div className={styles.profileInfo}>
            <p className={styles["profile-name"]}>{user?.first_name} {user?.last_name}
            </p>
            <p className={styles["profile-data"]}>@{user?.username}</p>
            <p className={styles["profile-data"]}>{user?.email}</p>
          </div>
        </div>

        <div className={styles.rightProfile}>
          <div className={styles.discbox}>
            <Flex vertical gap={60}>
              <TextArea
                showCount
                maxLength={100}
                onChange={onChange}
                placeholder="Describe Your Thougths"
                style={{
                  height: 150,
                  resize: "none",
                  width: 500,
                }}
              />
            </Flex>
          </div>
          <div className={styles.lastLoginContainer}>
            <div className={styles["last-login"]}>
              <span className={styles.icon}>
                <IoIosLogIn />
              </span>
              <p className={styles.lastLogInText}>Last Login</p>
              <p className={styles.lastLogInContent}>
                {getFormattedDateTime(user?.last_login)}
              </p>
            </div>
            <div className={styles["date-joined"]}>
              <span className={styles.icon}>
                <FiUserPlus />
              </span>
              <p className={styles.lastLogInText}>Date Joined</p>
              <p className={styles.lastLogInContent}>
                {getFormattedDateTime(user?.date_joined)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <h3 className={styles.title}>Photo Conversions</h3>
        <Table
          columns={columns}
          dataSource={photoConversions}
          bordered
          className={styles.table}
        />
      </div>
    </div>
  );
};

export default Profile;
