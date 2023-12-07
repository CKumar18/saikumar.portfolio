"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl sm:leading-normal lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-white">
              Hi, I&apos;m
              {""}
            </span>
            <br />
            <TypeAnimation
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-yellow-400"
              sequence={[
                "Sai Kumar",
                2000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a computer science student and am deeply passionate about the
            world of computers, with an enthusiasm for web development and
            software applications.
          </p>
          <div>
            <Link
              href="/myCv.pdf"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
            >
              Download Resume
            </Link>
            <Link
              href="#contact"
              className="px-10 inline-block py-3 w-full sm:w-fit rounded-full bg-white hover:bg-gradient-to-r from-red-300 to-yellow-400 text-black mt-3"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;