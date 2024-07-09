"use client";

import Link from "next/link";
import { FiDownload, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import Photo from "@/components/Photo";
import { useEffect, useState } from "react";

const socials = [
  { icon: <FiGithub />, path: "https://github.com/AndrewEssam95" },
  { icon: <FiLinkedin />, path: "https://www.linkedin.com/in/andrewessam95/" },
  { icon: <FiFacebook />, path: "https://www.facebook.com/andrew.essam95/" },
];

const App = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <section className="container mx-auto h-full flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-30 mb-6">
      <div className="order-2 xl:order-none text-center xl:text-left">
        <span className="text-xl">Frontend Developer</span>
        <h1 className="h1 mb-6">
          Hello I&apos;m
          <br />
          <span className="text-[#ee6723] dark:text-accent">Andrew Essam</span>
        </h1>
        {/* <p className="max-w-[500px] mb-9 text-white/80">
          Andrew Essam Andrew Essam Andrew Essam Andrew Essam Andrew Essam
          Andrew Essam Andrew Essam
        </p> */}
        <div className="flex flex-col xl:flex-row gap-6 items-center">
          <Link
            onClick={() => {
              setClicked(true);
            }}
            target="_blank"
            href="/Andrew Essam V1.0.pdf"
            download={clicked}
            className="outline-none border rounded-full flex justify-between items-center px-5 py-2 border-primary text-primary hover:bg-primary hover:text-accent dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-primary gap-2">
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Link>
          <div className="flex gap-2 items-center">
            {socials.map((social, index) => {
              return (
                <Link
                  target="_blank"
                  key={index}
                  href={social.path}
                  className="w-9 h-9 border rounded-full flex justify-center items-center hover:transition-all duration-500 border-primary text-primary hover:bg-primary hover:text-accent dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-primary">
                  {social.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </section>
  );
};

export default App;
