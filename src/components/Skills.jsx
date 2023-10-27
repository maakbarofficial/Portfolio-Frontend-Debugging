import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen text-center justify-center p-10 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Skills
      </h3>
      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm text-center">
        These are the Techs i've worked with
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 w-auto mx-auto mt-10 justify-center overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmq4.098c338a.jpg&w=640&q=75"
          }
          skill="MQL4"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmql5.bddf1a43.png&w=1080&q=75"
          }
          skill="MQL5"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpinescript.cdc884c4.png&w=828&q=75"
          }
          skill="PineScript"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhtml.60731c76.png&w=640&q=75"
          }
          skill="HTML"
        />

        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcss.26494df7.png&w=828&q=75"
          }
          skill="CSS"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjs.c1c7776c.png&w=256&q=75"
          }
          skill="JS"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freactjs.d225202e.png&w=3840&q=75"
          }
          skill="Reactjs"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.bc9c7cfe.png&w=640&q=75"
          }
          skill="Nodejs"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.bc9c7cfe.png&w=640&q=75"
          }
          skill="Nodejs"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.bc9c7cfe.png&w=640&q=75"
          }
          skill="Nodejs"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.bc9c7cfe.png&w=640&q=75"
          }
          skill="Nodejs"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.bc9c7cfe.png&w=640&q=75"
          }
          skill="Nodejs"
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.bc9c7cfe.png&w=640&q=75"
          }
          skill="Nodejs"
          directionLeft
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.bc9c7cfe.png&w=640&q=75"
          }
          skill="Nodejs"
          directionLeft
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.bc9c7cfe.png&w=640&q=75"
          }
          skill="Nodejs"
          directionLeft
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.bc9c7cfe.png&w=640&q=75"
          }
          skill="Nodejs"
          directionLeft
        />
        <Skill
          skillpicture={
            "https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnodejs.bc9c7cfe.png&w=640&q=75"
          }
          skill="Nodejs"
          directionLeft
        />
      </div>
    </motion.div>
  );
};

export default Skills;
