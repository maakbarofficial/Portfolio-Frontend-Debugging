import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: false }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-contain md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px]"
        src="https://maakbar-web.netlify.app/img/homeimg.PNG"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I Design and Develop Web Apps, Responsive Websites, Templates and
          Themes. I also Develop Automated Trading Scripts, Indicators & Expert
          Advisors (EA) for MT4, MT5 & TradingView Platform.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
