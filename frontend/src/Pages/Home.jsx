import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import homeimg from "../assets/homeimg.png"

export const Home = () => {
  return (
    <div
      name="home"
      className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-white mt-20 md:mt-0">
            Hello, I'm Rutika <br /> A Full Stack Developer
          </h2>
          
          <div>
            <Link
              to={"portfolio"}
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-4 md:my-2  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <img
          src={homeimg}
          alt=""
          className="rounded-2xl mx-4 md:ml-6 w-3/4 md:w-5/12"
        />
      </div>
    </div>
  );
};