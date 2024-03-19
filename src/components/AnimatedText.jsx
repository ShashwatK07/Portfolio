import { animate, motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

const AnimatedText = ({ text }) => {
  return (
    <div className="w-full mx-auto py-2 items-center justify-center text-center overflow-hidden">
      <motion.h1
        initial="hidden"
        animate="show"
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="inline-block w-full text-black font-bold capitalize text-4xl text-left"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
