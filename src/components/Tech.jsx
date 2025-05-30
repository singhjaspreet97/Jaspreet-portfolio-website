import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
          <div className='w-16 h-16 flex items-center justify-center bg-white/10 rounded-full p-2 shadow-md hover:scale-105 transition-transform'>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-full h-full object-contain'
            />
          </div>
          <p className='mt-2 text-white text-center text-sm'>{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
