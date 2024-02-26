"use client";
import React from 'react'
import Link from "next/link";
import { CiUser, CiLock } from "react-icons/ci";
import styles from '../login/page.module.css'
const SignUpPage = () => {
  const [form, setForm] = React.useState({
    "firstname" : "",
    "lastname" : "",
    "username" : "",
    "email" : "",
    "password" : "",
    "confirmPassword" : "",
  });
  return (
    <>
    <div className={styles["login-container"]}>
      <div className={styles.login}>
        <h1 className={styles.title}>Sign Up</h1>
        <form className={styles["login-form"]}>
          <div className={styles["inputs-container"]}>
            <div className={styles["input-container"]}>
              <label htmlFor="email" className={styles.label}>
                First Name
              </label>
              <div className={styles.input}>
                <CiUser />
                <input
                  type="text"
                  id="firstname"
                  onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                  value={form.firstname}
                  placeholder="Balen"
                />
              </div>
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="email" className={styles.label}>
                Last Name
              </label>
              <div className={styles.input}>
                <CiUser />
                <input
                  type="text"
                  id="lastname"
                  onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                  value={form.lastname}
                  placeholder="Shah"
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
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
                placeholder="balenshah"
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
                placeholder="username@example.com"
              />
            </div>
          </div>
          <div className={styles["inputs-container"]}>
            <div className={styles["input-container"]}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.input}>
                <CiUser />
                <input
                  type="text"
                  id="password"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  value={form.password}
                  placeholder=""
                />
              </div>
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.input}>
                <CiUser />
                <input
                  type="text"
                  id="confirmPassword"
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  value={form.confirmPassword}
                  placeholder=""
                />
              </div>
            </div>
          </div>
          {/* radio button of i accept all terms */}
          <div className={styles["checkbox-container"]}>
            <input
              type="checkbox"
              id="accept"
              onChange={(e) => setForm({ ...form, accept: e.target.value })}
              value={form.accept}
            />
            <label htmlFor="accept" className={styles.label}>
              I accept all terms and conditions.
            </label>
          </div>
          <button className={`${styles.button} ${styles["login-button"]}`}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </>
  );
};

export default SignUpPage;

