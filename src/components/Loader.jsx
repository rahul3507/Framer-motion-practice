/** @format */

import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 15],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
const Loader = () => {
  return (
    <motion.div
      variants={loaderVariants}
      animate="animationOne"
      className="loader"
    />
  );
};

export default Loader;
