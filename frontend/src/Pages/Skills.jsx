import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import flutter from "../assets/flutter.png";
import python from "../assets/python.png";
import graphql from "../assets/graphql.png";
function Skills() {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: flutter,
      title: "Flutter",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-yellow-600",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-500",
    },
  ];
  return (
    <div
      name="Skills"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-7 sm:grid-cols-3 text-center sm:px-0">
          {
            skills.map(({id,title,src,style})=>(
              <div key={id} className={"shadow-sm rounded-lg p-2 hover:scale-110 duration-500"+" "+style}>
                <img src={src} className="w-20 px-2"/>
                <p className="mt-4">{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Skills;
