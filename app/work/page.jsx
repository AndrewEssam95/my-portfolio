"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laboriosam.",
    stack: ["HTML 5", "CSS 3", "JavaScript"],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laboriosam.",
    stack: ["HTML 5", "CSS 3", "JavaScript", "Node JS", "Mongo DB"],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack mobile app",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laboriosam.",
    stack: ["React Native", "Node JS", "Mongo DB"],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laboriosam.",
    stack: ["Next JS", "Tailwind.CSS", "Redux"],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
];

const WorkPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [project, setProject] = useState(projects[currentIndex]);

  const handlePreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    if (currentIndex === 0) {
      setCurrentIndex(projects.length - 1);
    }
    // setProject(projects[currentIndex]);
  };
  const handleNextSlide = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
    if (currentIndex === projects.length - 1) {
      setCurrentIndex(0);
    }
    // setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-full flex flex-col justify-center py-4 xl:px-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold">
                {projects[currentIndex].num}
              </div>
              <h2 className="text-[42px] font-bold leading-none dark:text-white text-primary group-hover:text-accent transition-all duration-500 capitalize">
                {projects[currentIndex].category} project
              </h2>
              <p className="text-white/60">
                {projects[currentIndex].description}
              </p>
              <ul className="flex gap-4">
                {projects[currentIndex].stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl text-[#ee6723] dark:text-accent">
                      {`${item}${
                        index !== projects[currentIndex].stack.length - 1
                          ? ","
                          : ""
                      }`}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                <Link href={projects[currentIndex].live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full dark:bg-white/5 bg-primary hover:bg-[#000021] flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={projects[currentIndex].github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full dark:bg-white/5 bg-primary hover:bg-[#000021] flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] xl:h-[520px] relative">
            <div className="relative w-full xl:h-[460px] mb-2 h-[420px] group flex justify-center items-center bg-pink-50/20">
              <Image
                src={projects[currentIndex].image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-2 w-full justify-between xl:justify-end xl:w-full absolute top-[calc(50%-22px)] xl:top-[90%]">
              <button
                onClick={handlePreviousSlide}
                className="dark:bg-accent dark:hover:bg-accent-hover bg-primary hover:bg-[#000021] text-accent dark:text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all">
                <PiCaretLeftBold />
              </button>
              <button
                onClick={handleNextSlide}
                className="dark:bg-accent dark:hover:bg-accent-hover dark:text-primary bg-primary hover:bg-[#000021] text-accent text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all">
                <PiCaretRightBold />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
