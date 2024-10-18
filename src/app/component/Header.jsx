import Image from "next/image";
import React from "react";

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
    <header className="flex justify-between items-center md:px-10 px-3 py-4 bg-zinc-900 ">
      <h1 className="md:text-3xl text-2xl font-semibold flex items-center gap-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
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
          className="border-2 rounded-md md:px-5 px-3 md:py-2 py-1 md:text-xl text-lg font-medium cursor-pointer hover:bg-[#0A0A0A] duration-300"
        >
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
