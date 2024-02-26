"use client";

import About from "@/components/About/page";
import Hero from "@/components/Hero/Hero";
import DemoShow from "@/components/demoshow/page";
import Howmany from "@/components/howmany/page";

import "antd/dist/reset.css";

export default function Home() {
  return (
    <>
      <Hero />
      <DemoShow />
      <Howmany />
      <About />
    </>
  );
}
