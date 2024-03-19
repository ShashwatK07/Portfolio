import React from "react";
import { motion } from "framer-motion";
import EachSkill from "./subcomponents/EachSkill";

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-8xl mt-[64px] mb-5 text-center w-full font-montserrat lg:text-4xl md:text-6xl">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <EachSkill name="Web" x="0" y="0" />
        <EachSkill name="Javascript" x="-5vw" y="-10vw" />
        <EachSkill name="HTML" x="-20vw" y="2vw" />
        <EachSkill name="CSS" x="20vw" y="5vw" />
        <EachSkill name="ReactJs" x="0vw" y="18vw" />
        <EachSkill name="C++" x="-20vw" y="-15vw" />
        <EachSkill name="NodeJs" x="32vw" y="-5vw" />
        <EachSkill name="Python" x="5vw" y="-20vw" />
        <EachSkill name="Tailwind CSS" x="-28vw" y="10vw" />
        <EachSkill name="MongoDB" x="28vw" y="12vw" />
        <EachSkill name="ExpressJs" x="18vw" y="-11vw" />
      </div>
    </div>
  );
};

export default Skills;
