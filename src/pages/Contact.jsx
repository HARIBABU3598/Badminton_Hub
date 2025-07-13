import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.jpg";
import lee from "../assets/contact.jpg";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <motion.div
      className="bg-cover bg-center min-h-screen bg-black flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-6xl backdrop-blur-2xl bg-black/70 text-white rounded-xl shadow-xl p-6"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-center text-blue-400 mb-6 underline underline-offset-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        {/* Content Block */}
        <motion.div
          className="flex flex-col lg:flex-row gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Text Section */}
          <motion.div
            className="flex-1 space-y-4"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg sm:text-xl leading-relaxed font-serif">
              We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello,
              feel free to reach out. Our team is passionate about building a vibrant badminton community, and
              your feedback helps us grow stronger every day.
            </p>

            {/* Contact Table */}
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-lg bg-white/10 backdrop-blur-md rounded border border-white/20">
                <tbody>
                  <tr>
                    <td className="p-3 font-semibold">Instructor Name</td>
                    <td className="p-3">HARIBABU</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Email</td>
                    <td className="p-3">
                      <a
                        href="mailto:harirom5444v@gmail.com"
                        className="text-blue-400 underline"
                      >
                        harirom5444v@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Instagram</td>
                    <td className="p-3">
                      <a
                        href="https://www.instagram.com/_birdie_blaster_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 underline"
                      >
                        @_birdie_blaster_
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Feedback Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdHE_eQ69cFdD7q181iel_0RfdRZe_LZqZ4DZus7ngrAtMrxQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-5 mt-4 rounded transition duration-300"
              >
                Submit Feedback
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={lee}
              alt="Instructor"
              className="w-full max-w-xs rounded-lg shadow-lg border border-white/10"
            />
          </motion.div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300 mb-5"
          >
            ← Back
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
