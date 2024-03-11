"use client";

import React from "react";
import { useMutation } from "@tanstack/react-query";
import myaxios from "@/utils/myaxios";
import { URL } from "@/data/URL";
import { getError } from "@/utils/utils";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { message } from "antd";
import styles from "./page.module.css";
import Image from "next/image";
import otplogo from "../../../../../public/logo/otp.png";

const page = () => {
  const searchParams = useSearchParams();
  const otp = searchParams.get("otp");
  const [form, setForm] = React.useState({
    otp: otp ? otp : "",
  });
  const { username } = useParams();

  const verifyMutate = useMutation({
    mutationKey: ["verify"],
    mutationFn: async () => {
      const response = await myaxios.get(
        `${URL}acc/activate/${username}/${form.otp}/`
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log("data", data);
      if (data?.success) {
        message.success(data?.message);
        window.location.href = `/account/login/`;
      }
    },
    onError: (error) => {
      console.log("error", error);
      message.error(getError(error));
    },
  });
  const handleVerify = (e) => {
    e.preventDefault();
    console.log({ form });
    console.log({ username });
    verifyMutate.mutateAsync();
  };
  return (
    <div className={styles["verify-container"]}>
      <div className={styles.verify}>
        <h2 className={styles.title}>Verify OTP</h2>
        <div className={styles.image}>

        <Image src={otplogo} alt="otplogo" width={200} height={200} />
        </div>
        <div className={styles["verify-form-container"]}>
          <form onSubmit={handleVerify} className={styles["verify-form"]} >
            <label htmlFor="otp" className={styles.label}>
              OTP
            </label>
            <div className={styles.input}>
              <input
                type="text"
                name="otp"
                onChange={(e) => setForm({ ...form, otp: e.target.value })}
                placeholder="123456"
                value={form.otp}
                required
              />
            </div>
            <button type="submit" className={`${styles.button} ${styles["login-button"]}`}>Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
