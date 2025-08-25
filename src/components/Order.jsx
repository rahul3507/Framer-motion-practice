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

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      <motion.div>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
