import Image from "next/image";
import React from "react";
import { FiUpload } from "react-icons/fi";

function Header({ setImage }) {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image")) {
      const reader = new FileReader();
      reader.onload = (readerEvent) => {
        setImage(readerEvent.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImage("");
    }
  };

  return (
    <header className="flex items-center justify-between px-2 py-4 md:px-10 bg-zinc-900 ">
      <h1 className="flex items-center gap-1 text-2xl font-semibold text-transparent md:text-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
        <Image
          src={"/logo.png"}
          alt="logo"
          height={20}
          width={30}
          className="w-auto h-auto"
        />{" "}
        Palette Craft
      </h1>

      <div>
        <label
          for="myfile"
          className="border-2 flex gap-2 items-center rounded-md md:px-5 px-3 md:py-2 py-1 md:text-xl text-lg font-medium cursor-pointer hover:bg-[#0A0A0A] duration-300"
        >
          <FiUpload size={22} />
          Upload Image
        </label>
        <input
          type="file"
          id="myfile"
          name="myfile"
          hidden
          onChange={handleImageUpload}
        />
      </div>
    </header>
  );
}

export default Header;
