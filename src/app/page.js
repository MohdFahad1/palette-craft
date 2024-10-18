"use client";
import Header from "./component/Header";
import React, { useState } from "react";

export default function Home() {
  const [image, setImage] = useState("");

  return (
    <main>
      <Header setImage={setImage} />
    </main>
  );
}
