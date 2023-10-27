import React from "react";
import { motion } from "framer-motion";

const Skill = ({ skillpicture, skill, directionLeft }) => {
  return (
    <div className="group relative flex cursor-pointer w-24 h-24 xl:w-32 xl:h-32 rounded-full p-5 border border-gray-500 mx-auto">
      <motion.img
        initial={{
          x: directionLeft ? 50 : -50,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src={skillpicture}
        className="object-contain w-full h-full filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 left-0 top-0 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">{skill}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
