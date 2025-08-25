/** @format */

import React from "react";
import { motion } from "framer-motion";
const containerVarient = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
      duration: 2,
      type: "spring",
      stiffness: 120,
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
