"use client";
import React from "react";
import Link from "next/link";
import { CiUser, CiLock } from "react-icons/ci";
import styles from "./page.module.css";
import { Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import myaxios from "@/utils/myaxios";
import { URL } from "@/data/URL";

function Login() {
  const [form, setForm] = React.useState({
    username: "",
    password: "",
  });
  const loginMutate = useMutation({
    mutationKey: ["login"],
    mutationFn: async () => {
      const response = await myaxios.post(`${URL}acc/login/`, form);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("data", data);
      if (data?.data?.token) {
        localStorage.setItem("token", data.data.token);
        window.location.href = "/profile/";
      }
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ form });
    if (form.username && form.password) {
      // loginMutate.mutateAsync();
      alert("sign req sent");
    }
  };
  return (
    <div className={styles["login-container"]}>
      <div className={styles.login}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.smalltext}>It’s quick and easy.</p>
        <hr className={styles.hr} />
        <form className={styles["login-form"]} onSubmit={handleLogin}>
          <div className={styles["inputs-container"]}>
            <div className={styles["input-container"]}>
              <label htmlFor="username" className={styles.label}>
                First Name
              </label>
              <div className={styles.input}>
                <CiUser />
                <input
                  type="firstname"
                  id="firstname"
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                  value={form.username}
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="username" className={styles.label}>
                Last Name
              </label>
              <div className={styles.input}>
                <CiUser />
                <input
                  type="lastname"
                  id="lastname"
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                  value={form.username}
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
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
                placeholder="Username"
              />
            </div>
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="username" className={styles.label}>
              Email
            </label>
            <div className={styles.input}>
              <CiUser />
              <input
                type="email"
                id="email"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                value={form.username}
                placeholder="Email"
              />
            </div>
          </div>
          <div className={styles["inputs-container"]}>
            <div className={styles["input-container"]}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.input}>
                <CiLock />
                <input
                  type="password"
                  id="password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  value={form.password}
                />
              </div>
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="password" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.input}>
                <CiLock />
                <input
                  type="password"
                  id="password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  value={form.password}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={`${styles.button} ${styles["login-button"]}`}
          >
            Sign Up
          </button>
        </form>
        <div className={styles["social-login"]}>
          <hr />
          <p>or</p>
          <div className={styles["social-icons"]}>
            <Link href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt="Google Icon"
                width={20}
                style={{ verticalAlign: "middle", marginRight: "10px" }}
              />
              Sign Up with Google
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
