import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirlces from "./BackgroundCirlces";
import HeroImg from "../assets/Hero-Img.jpg";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      `Hi, the name's Muhammad Ali Akbar`,
      "Guy-Who-Loves-☕️.mq5",
      "<Butt-Loves-To-Code-More />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCirlces />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={HeroImg}
        alt="Muhammad Ali Akbar"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 py-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
