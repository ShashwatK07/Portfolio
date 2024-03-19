import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { Link } from "react-router-dom";
import Transition from "../Transition";
import { ExternalLink } from "lucide-react";
const HomePage = () => {
  return (
    <div>
      <Transition />
      <main className="items-center text-gray-950 w-full min-h-screen px-28 xl:px-24 lg:px-16 md:px-12 sm:px-8 sm:mb-0 ">
        <section className="flex justify-between items-center w-full lg:flex-col ">
          <div className="w-1/2 md:w-full">
            <img
              src="/HomeImage.png"
              className="w-full h-auto md:inline-block sm:w-full "
            />
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center lg:w-full">
            <div className="w-full mx-auto py-2 items-center justify-center text-center overflow-hidden ">
              <motion.h1
                initial="hidden"
                animate="show"
                variants={fadeIn("right", "tween", 0.5, 0.75)}
                className="inline-block w-full text-black font-bold capitalize text-4xl text-left lg:text-center sm:text-3xl"
              >
                Turning Vision Into Reality With Code And Design.
              </motion.h1>
            </div>
            <motion.p
              initial="hidden"
              animate="show"
              variants={textVariant(0.5)}
              className="my-4 text-base text-montserrat"
            >
              I'm a skilled full-stack developer, and my focus is on bringing
              ideas to life through creative web applications. Check out my
              latest projects to see my expertise in React.js and web
              development.
            </motion.p>
            <div className="flex items-center self-start mt-2 lg:self-center md:mb-6">
              <Link
                to="/Shashwat_Resume.pdf"
                target="_blank"
                download={true}
                className="flex items-center justify-center bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid hover:border-black"
              >
                Resume
                <span className="ml-2">
                  <ExternalLink />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
