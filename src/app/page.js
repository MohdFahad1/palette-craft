"use client";
import DisplayImage from "./component/DisplayImage";
import Footer from "./component/Footer";
import Header from "./component/Header";
import React, { useState } from "react";

export default function Home() {
  const [image, setImage] = useState("");

  return (
    <>
      <Header setImage={setImage} />
      <DisplayImage image={image} />
      <Footer />
    </>
  );
}
