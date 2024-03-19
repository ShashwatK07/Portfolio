import React from "react";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = ({ title, desc, img, github }) => {
  return (
    <div className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-black shadow-2xl p-12 bg-slate-100 lg:flex-col md:p-8 xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] xs:h-[102%] bg-black rounded-[2.5rem] rounded-br-3xl" />
      <div className="w-1/2 overflow-hidden rounded-xl bg-slate-600 lg:w-full border-[2px] border-solid border-black">
        <img
          src={img}
          alt="project"
          className="w-full h-[300px] sm:h-[200px] "
        />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 gap-2 lg:w-full">
        <h2 className="mt-2 w-full text-left text-4xl font-bold cursor-pointer font-montserrat sm:text-2xl">
          {title}
        </h2>
        <p className="font-medium font-palanquin12">{desc}</p>
        <div className="flex gap-5 capitalize font-medium font-palanquin">
          <Link
            to={github}
            className="p-3 gap-2 bg-black text-white rounded-lg flex justify-center items-center sm:text-sm"
            target="_blank"
          >
            <Github />
            Visit Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
