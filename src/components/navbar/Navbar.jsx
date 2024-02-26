"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

import logo from "../../../public/logo/horizontal-logo-no-bg.svg"
import myaxios from "@/utils/myaxios";

import { Dropdown } from "antd";
import { useMutation } from "@tanstack/react-query";

import { URL } from "@/data/URL";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "About",
    url: "/about",
  },
  // {
  //   id: 3,
  //   title: "Contact",
  //   url: "contact",
  // },
];

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = React.useState(localStorage.getItem("token") ? true : false);
  const logoutMutate = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => {
      const response = myaxios.post(`${URL}acc/logout/`);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("logged out", data);
      localStorage.setItem("token", null);
      window.location.href = "/account/login";
    },
    onError: (error) => {
      console.log("error", error);
    }
  });
  const items = [
    {
      label: <a href="/profile/">Profile</a>,
      key: "0",
    },
    {
      label: <a href="/settings/">Settings</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Log out",
      key: "3",
      danger: true,
      onClick: async () => {
        // ask user if they want to log out
        if (confirm("Are you sure you want to log out?")) {
          await logoutMutate.mutateAsync();
        }
  
      },
    },
  ];
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        <Image
        src={logo}
        alt="logo"
        width={"200"}
        height={"100"}
        />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {!userLoggedIn ? (
          <Link
            className={styles.login}
            href="/account/login"
          >
            Log In
          </Link>
        ) : (
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <div className={styles["profile-container"]}>
              <img
                src="https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg"
                alt="profile"
                width={"40"}
                height={"40"}
                className={styles.profile}
              />
            </div>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default Navbar;
