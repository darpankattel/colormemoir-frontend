"use client";
import React, {useState} from "react";
import Link from "next/link";
import { CiUser, CiLock } from "react-icons/ci";
import styles from "./page.module.css";
import { message } from "antd";
import { useMutation } from "@tanstack/react-query";
import myaxios from "@/utils/myaxios";
import { URL } from "@/data/URL";
import { getError } from "@/utils/utils";
import SpinningLoader from "@/components/loader/SpinningLoader";
import { useRouter } from "next/navigation";

function Signup() {
  const [form, setForm] = React.useState({
    "first_name": "",
    "last_name": "",
    "username": "",
    "email": "",
    "password": "",
    "confirm_password": "",
  });
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(false);
  const signupMutate = useMutation({
    mutationKey: ["signup"],
    mutationFn: async () => {
      const response = await myaxios.post(`${URL}acc/register/`, form);
      return response.data;
    },
    onSuccess: (data) => {
      setShowLoader(false);
      console.log("data", data);
      if (data?.success) {
        message.success(data?.message);
        if (data?.data?.username) {
          // window.location.href = `/account/verify/${data?.data?.username}`;
          router.push(`/account/verify/${data?.data?.username}`);
        }
      }
    },
    onError: (error) => {
      setShowLoader(false);
      console.log("error", error);
      message.error(getError(error));
    },
  });
  const handleSignup = (e) => {
    e.preventDefault();
    console.log({ form });
    if (!form.first_name || !form.last_name || !form.username || !form.email || !form.password || !form.confirm_password) {
      message.error("All fields are required");
    }
    else if (form.confirm_password === form.password) {
      setShowLoader(true);
      signupMutate.mutateAsync();
      console.log("form", form);
    } else {
      message.error("Passwords do not match");
    }
  };
  return (
    <div className={styles["login-container"]}>
      { showLoader  &&
      <SpinningLoader text="Signing Up..." /> }
      <div className={styles.login}>
        <h1 className={styles.title}>Sign up</h1>
        <p className={styles.smalltext}>It’s quick and easy.</p>
        <hr className={styles.hr} />
        <form className={styles["login-form"]} onSubmit={handleSignup}>
          <div className={styles["inputs-container"]}>
            <div className={styles["input-container"]}>
              <label htmlFor="first_name" className={styles.label}>
                First Name
              </label>
              <div className={styles.input}>
                <CiUser />
                <input
                  type="text"
                  id="first_name"
                  onChange={(e) =>
                    setForm({ ...form, first_name: e.target.value })
                  }
                  value={form.first_name}
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="last_name" className={styles.label}>
                Last Name
              </label>
              <div className={styles.input}>
                <CiUser />
                <input
                  type="text"
                  id="last_name"
                  onChange={(e) =>
                    setForm({ ...form, last_name: e.target.value })
                  }
                  value={form.last_name}
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
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <div className={styles.input}>
              <CiUser />
              <input
                type="email"
                id="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
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
              <label htmlFor="confirm_password" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.input}>
                <CiLock />
                <input
                  type="password"
                  id="confirm_password"
                  onChange={(e) =>
                    setForm({ ...form, confirm_password: e.target.value })
                  }
                  value={form.confirm_password}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={`${styles.button} ${styles["login-button"]}`}
          >
            Sign up
          </button>
        </form>
        <div className={styles["social-login"]}>
          <hr />
          <p>or</p>
          <div className={styles["social-icons"]}>
            <Link href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt="Google Icon"
                width={20}
                style={{ verticalAlign: "middle", marginRight: "10px" }}
              />
              Sign up with Google
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
