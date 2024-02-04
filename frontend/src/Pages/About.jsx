import React from "react";
import { Link } from "react-scroll";

function About() {
  return (
    <div
      name="About"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <br />
        <p className="text-xl mt-20">
          I'm prefinal year undergrad pursuing computer Engineering from Mumbai
          University.
          <br />
          <br />I have worked on flutter development and web development too.
          Interned with Expedia Group as a Software development intern.{" "}
        </p>
        <br />
        <p className="text-xl">
          I love solving algorithmic problems and have strong grasp on data
          structures and algorithm, currently exploring AI tech with some
          projects.
        </p>
      </div>
    </div>
  );
}

export default About;
