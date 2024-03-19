import { motion } from "framer-motion";
import { zoomIn } from "../../utils/motion";

import Skills from "../Skills";
import Education from "../Education";
import AboutMe from "../AboutMe";
import Transition from "../Transition";

const AboutPage = () => {
  return (
    <>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center px-28 xl:px-24 lg:px-16 md:px-12 sm:px-8 ">
        <div className="pt-15 justify-center mx-7">
          <div className="w-full mx-auto py-2 items-center justify-center text-center overflow-hidden ">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={zoomIn(0.5, 1)}
              className="inline-block w-full text-black font-bold capitalize text-8xl mb-5 md:text-4xl "
            >
              Passion Fuels Purpose!
            </motion.h1>
          </div>
          <AboutMe />
          <Skills />
          <Education />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
