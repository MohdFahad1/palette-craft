import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="fixed bottom-0 flex items-center justify-center w-full px-2 md:px-0 ">
      <div className="flex items-center justify-center w-full gap-10 px-2 py-5 mb-2 rounded-md md:gap-20 md:px-0 md:w-1/2 bg-zinc-900">
        <h1>Made by Mohd Fahad</h1>
        <Link
          href={"https://github.com/MohdFahad1/palette-craft"}
          target="_blank"
          className="flex items-center gap-1 hover:underline"
        >
          Source Code <FaGithub size={22} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
