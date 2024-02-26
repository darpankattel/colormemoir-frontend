import React from "react";
import { redirect } from "next/navigation";

const page = () => {
  redirect("/account/login");
};

export default page;
