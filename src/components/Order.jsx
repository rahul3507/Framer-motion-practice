/** @format */

import React from "react";
import { motion, stagger } from "framer-motion";
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
  return (
    <motion.div
      className="container order"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
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
