"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

import logo from "../../../public/logo/horizontal-logo-no-bg.svg"
import myaxios from "@/utils/myaxios";

import { Dropdown } from "antd";
import { useMutation } from "@tanstack/react-query";
import { RiImageAddLine } from "react-icons/ri";

import { URL } from "@/data/URL";
import { getError } from "@/utils/utils";

import { useRouter } from "next/navigation";
import SpinningLoader from "../loader/SpinningLoader";

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
  }
];

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = React.useState();
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(false);
  const logoutMutate = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => {
      const response = myaxios.post(`${URL}acc/logout/`);
      return response.data;
    },
    onSuccess: (data) => {
      setShowLoader(false);
      console.log("logged out", data);
      localStorage.removeItem("token");
      // window.location.href = "/account/login";
      router.push("/account/login");
    },
    onError: (error) => {
      setShowLoader(false);
      console.log("error", error);
      message.error(getError(error));
    }
  });
  const items = [
    {
      label: <Link href="/profile/">Profile</Link>,
      key: "0",
    },
    {
      label: <Link href="/settings/">Settings</Link>,
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
          setShowLoader(true);
          await logoutMutate.mutateAsync();
        }
  
      },
    },
  ];
  useEffect(() => {
    setUserLoggedIn(localStorage.getItem("token") ? true : false);
  });
  return (
    <div className={styles.container}>
      { showLoader  &&
      <SpinningLoader text="Logging Out..." /> }
      <Link className={styles.logo} href="/">
        <Image
        src={logo}
        alt="logo"
        width={"200"}
        height={"100"}
        className={styles.colormemoir}
        />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={link?.className}>
            {link.title}
          </Link>
        ))}
        {userLoggedIn && 
          <Link
            className={styles.colorizeLink}
            href="/colorize"
          >
            <RiImageAddLine /> Colorize
          </Link>
        }
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
