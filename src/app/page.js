"use client";
import DisplayImage from "./component/DisplayImage";
import Header from "./component/Header";
import React, { useState } from "react";

export default function Home() {
  const [image, setImage] = useState("");

  return (
    <>
      <Header setImage={setImage} />
      <DisplayImage image={image} />
    </>
  );
}
