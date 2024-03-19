import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Details from "./subcomponents/Details";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-[64px] ">
      <h2 className="font-montserrat text-8xl font-bold w-full text-center mb-28 sm:text-4xl ">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[5px] bg-black origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between mb-16 ml-4 xs:ml-2 sm:mb-0 md:mb-8">
          <Details
            name="Bachelor of Technology"
            institute="Jaypee Institute of Information Technology"
            time="2021-2025"
            details="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />
          <Details
            name="Data Structures in C++"
            institute="Coding Ninjas"
            time="2023"
            details=" Specialized course in Data Structures and Algorithms, enhancing participants' problem-solving abilities and coding skills, crucial for success in technical interviews and real-world software development."
          />
          <Details
            name="The Web Development Bootcamp"
            institute="Udmey"
            time="2022"
            details=" Intensive training program focusing on practical skills for building websites and applications, equipping participants with hands-on experience in web development technologies and frameworks."
          />
          <Details
            name="Secondary School"
            institute="Takshashila Public School"
            time="2020-2021"
            details="Rigorous study of Physics, Chemistry, and Mathematics at the 12th-grade level, providing a solid foundation for pursuing higher education in engineering, sciences, or related fields."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
