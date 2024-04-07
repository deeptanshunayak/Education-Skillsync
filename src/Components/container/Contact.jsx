import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Feedback :
        </div>
        <p className="text-sm leading-7 text-gray">
          Please help us improve by providing your valuable feedback because your feedback can give us insights and will 
          be able to enhance our content in future updates.
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          />
          <input
            type="text"
            placeholder="Enter your Name:"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          />
          <div className="pt-4"></div>
          <input
            type="text"
            placeholder="Enter your Feedback:"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60 pt-4"
          />
          <button className="text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold">
            Submit
          </button>
        </motion.form>
      </div>
    </div>
    
  );
};

export default Contact;