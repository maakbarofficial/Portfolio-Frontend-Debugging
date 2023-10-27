import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          network="linkedin"
          url="https://linkedin.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          network="github"
          url="https://Github.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          network="facebook"
          url="https://facebook.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          network="whatsapp"
          url="https://Whatsapp.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          url="#contact"
          className="cursor-pointer h-5 w-5"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400s">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
