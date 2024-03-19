import React from "react";
import { motion } from "framer-motion";
import { zoomIn } from "../../utils/motion";
import Projects from "../subcomponents/Projects";
import Transition from "../Transition";

const ProjectsPage = () => {
  return (
    <>
      <Transition />
      <main className="flex w-full flex-col items-center justify-center px-28 xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-2">
        <div className="pt-15 justify-center mx-8 ">
          <div className="w-full mx-auto py-2 items-center justify-center text-center overflow-hidden mb-28 sm:mb-10 lg:mb-8">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={zoomIn(0.5, 1)}
              className="inline-block w-full text-black font-bold capitalize text-8xl lg:text-4xl "
            >
              Unleashing Innovative Projects!
            </motion.h1>
          </div>
          <div className="flex w-full flex-col gap-24 sm:gap-12">
            <div>
              <Projects
                title="Chat App"
                desc="Experience real-time messaging and seamless communication with our Express.js-powered chat app. Built on MongoDB for data storage and Socket.io for instant updates, it delivers a dynamic and interactive chatting experience."
                img="/ChatApp.png"
                github="https://github.com/ShashwatK07/Chat_App"
              />
            </div>
            <div>
              <Projects
                title="Hotel App"
                desc="This is a simple React-based web application that allows users to browse and view featured properties in different cities. Users can filter properties by city, view property details, and load more properties as needed. The application is designed with modularity in mind and utilizes React Router for navigation."
                img="/HotelApp.png"
                github="https://github.com/ShashwatK07/Hotel_App"
              />
            </div>
            <div className="mb-24">
              <Projects
                title="HireIt"
                desc="HireIt, a top-tier hiring platform, streamlines recruitment with tools for connecting businesses with top talent. Our user-friendly interface suits organizations of all sizes, ensuring a seamless hiring process. Elevate your success by effortlessly finding the most qualified candidates with HireIt."
                img="/HireIt.png"
                github="https://github.com/ShashwatK07/Hire_It"
              />
            </div>
            <div className="mb-24">
              <Projects
                title="Nike"
                desc="Streamline your Nike shopping experience with our intuitive single-page app, offering a diverse range of the brand's latest products with ease of navigation."
                img="/Nike.png"
                github="https://github.com/ShashwatK07/Nike"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
