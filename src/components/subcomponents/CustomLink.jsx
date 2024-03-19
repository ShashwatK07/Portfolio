import React from "react";
import { Link, useLocation } from "react-router-dom";

const CustomLink = ({ to, title }) => {
  const location = useLocation();

  return (
    <Link to={to} className="relative group">
      {title}
      <span
        className={`h-[2px] inline-block bg-black lg:bg-white absolute left-0 -bottom-0.5 
          group-hover:w-full transition-width ease-in duration-300 ${
            location.pathname === to ? "w-full" : "w-0"
          }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
