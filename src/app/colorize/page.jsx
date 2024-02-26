"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import Button from "@/components/Button/Button";
import { useMutation } from "@tanstack/react-query";
import myaxios from "@/utils/myaxios";
import { URL } from "@/data/URL";
import { useRouter } from "next/navigation";
import { CiUser } from "react-icons/ci";
import SpinningLoader from "@/components/loader/SpinningLoader";

const { Dragger } = Upload;

const Colorize = () => {
  const [showLoader, setShowLoader] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    input_image: null,
    name: "",
  });
  const uploadMutate = useMutation({
    mutationKey: ['upload'],
    mutationFn: async () => {
      const formData = new FormData();
      formData.append("input_image", form.input_image);
      formData.append("name", form.name);
      console.log({formData});
      const response = await myaxios.post(`${URL}conv/initiate/`, formData);
      return response.data;
    },
    onSuccess: (data) => {
      setShowLoader(false);
      console.log("data", data);
      const id = data.data.reference_id;
      router.push(`/colorize/${id}`);
    },
    onError: (error) => {
      setShowLoader(false);
      console.log("error", error);
    }
  });
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const props = {
    multiple: false,
    beforeUpload: () => false, // To prevent automatic upload before submission
    onChange: (info) => {
      // Update form state with the selected file
      console.log({ info });
      const file = info.fileList[0].originFileObj;
      setForm({ ...form, input_image: file });
    },
    innerWidth: "100%",
    outerWidth: "100%",
    previewFile: (file) => {
      return URL.createObjectURL(file);
    },
    onPreview:{onPreview}
  };

  const handleSubmit = () => {
    setShowLoader(true);
    uploadMutate.mutate();
  };

  return (
    <div className={styles.container}>
      { showLoader  &&
      <SpinningLoader text="Uploading..." /> }
      <div className={styles.form}>
        <h2 className={styles.title}>Upload Your Image</h2>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Image Title</label>
          <div className={styles.input}>
            <CiUser />
            <input type="text" placeholder="Pashupatinath in 1800s" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
        </div>
        <Dragger className={styles.upload} {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className={styles.text}>Click or drag file to this area to upload</p>
          <p className={styles.warning}>Support for a single upload only.</p>
        </Dragger>
      <Button className={styles.button} onClick={handleSubmit} text="Colorize" />
      </div>
    </div>
  );
};

export default Colorize;
