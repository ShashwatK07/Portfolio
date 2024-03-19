import React from "react";
import { useRef } from "react";
import Bullets from "./Bullets";

const Details = ({ name, institute, time, details }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between font-palanquin"
    >
      <Bullets reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">
          {name}
        </h3>
        <span className="capitalize font-semibold  text-lg xs:text-sm">
          {time} | {institute}
        </span>
        <p className="font-medium w-full md:text-sm">{details}</p>
      </div>
    </li>
  );
};

export default Details;
