/** @format */

import React, { useState } from "react";
import { AnimatePresence, motion, stagger } from "framer-motion";
const containerVarient = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      type: "spring",
      stiffness: 120,
      when: "beforeChildren",
    },
  },
};

const childVarient = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 4,
      type: "spring",
      stiffness: 120,
    },
  },
};

const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 3000);

  return (
    <motion.div
      className="container order"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && (
          <motion.h2 exit={{ y: -1000 }} key="title">
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>

      <motion.p variants={childVarient} initial="hidden" animate="visible">
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVarient} initial="hidden" animate="visible">
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
