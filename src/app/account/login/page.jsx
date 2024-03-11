"use client";
import React, {useEffect, useContext, useState} from "react";
import Link from "next/link";
import { CiUser, CiLock } from "react-icons/ci";
import styles from "./page.module.css";
import { Button, message } from 'antd';
import { useMutation } from "@tanstack/react-query";
import myaxios from "@/utils/myaxios";
import { URL } from "@/data/URL";
import { UserContext } from '../../../context/UserContext';
import SpinningLoader from "@/components/loader/SpinningLoader";

function Login() {
  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });
  const [showLoader, setShowLoader] = useState(false);
  const loginMutate = useMutation({
    mutationKey: ['login'],
    mutationFn: async () => {
      const response = await myaxios.post(`${URL}acc/login/`, form);
      return response.data;
    },
    onSuccess: (data) => {
      setShowLoader(false);
      console.log("data", data);
      if (data?.data?.token) {
        localStorage.setItem("token", data.data.token);
        window.location.href = "/profile/";
      }
    },
    onError: (error) => {
      setShowLoader(false);
      console.log("error", error);
    }
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log({form});
    if (form.username && form.password) {
      setShowLoader(true);
      loginMutate.mutateAsync();
    }
  }
  return (
    <div className={styles["login-container"]}>
      { showLoader  &&
      <SpinningLoader text="Logging In..." /> }
      <div className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles["login-form"]} onSubmit={handleLogin}>
          <div className={styles["input-container"]}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <div className={styles.input}>
              <CiUser />
              <input
                type="username"
                id="username"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                value={form.username}
                placeholder="balenshah"
              />
            </div>
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.input}>
              <CiLock />
              <input
                type="password"
                id="password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                value={form.password}
              />
            </div>
            <Link href="/forgot-password" className={styles["forgot-password"]}>
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className={`${styles.button} ${styles["login-button"]}`}>
            Login
          </button>
        </form>
        <div className={styles["social-login"]}>
          <hr />
          <p>or login with</p>
          <div className={styles["social-icons"]}>
            <Link href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt="Google Icon"
                width={20}
                style={{ verticalAlign: "middle", marginRight: "10px" }}
              />
              Sign in with Google
            </Link>
          </div>
        </div>
        <div className={styles["create-account"]}>
          <p>
            Don't have an account? <Link href="/account/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
