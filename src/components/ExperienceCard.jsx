import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col flex-shrink-0 rounded-lg items-center snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: false }}
        src="https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmql5.bddf1a43.png&w=1080&q=75"
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-contain"
        alt="WorkExperience"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front End Developer</h4>
        <p className="font-bold text-2xl mt-1">DTeckerz</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full object-contain"
            src="https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmql5.bddf1a43.png&w=1080&q=75"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-contain"
            src="https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmql5.bddf1a43.png&w=1080&q=75"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-contain"
            src="https://maliakbar.tech/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmql5.bddf1a43.png&w=1080&q=75"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          {"10-20-2022"} -{"Present"}
        </p>
        <ul className="p-5 list-disc space-y-4 h-[200px] ml-5 text-lg overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
          <li>Responsible for making React Base Front End</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
