import React from "react";
import insta from "../assets/insta.jpeg";
import gfg from "../assets/gfg.png";
import blog from "../assets/blog.png";
import todo from "../assets/todo.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const plist = [
    {
      id: 1,
      src: gfg,
      title: "MadeForGeeks",
      desc: "Visual learning platform for data structures and algorithems. integrated web code editor which supports multiple programming language",
      href: "https://made-for-geeks.vercel.app/",
      gitlink:"https://github.com/Rutika-B/Made_for_Geeks",
    },
    {
      id: 2,
      src: blog,
      title: "BlogVista",
      desc: "Blog Application is a full stack application that allows users to create, edit, and delete blog posts. This application was built using Reactjs, AppWrite for backend",
      href: "https://blog-vista-fh5o.vercel.app/",
      gitlink:"https://github.com/Rutika-B/BlogVista",
    },
    {
      id: 3,
      src: insta,
      title: "InstaReplica",
      desc: "Full stack flutter application where user can post photos, like, comment and follow other users' profile. This application uses flutter, dart, firebase for backend",
      gitlink:"https://github.com/Rutika-B/Instagram_clone",
    },
    {
      id: 3,
      src: todo,
      title: "Todo App",
      desc: "A simple to-do application built using React and Redux. Users can add, edit, and delete to-do items. This application uses local storage to store the to-do items and is fully responsive.",
      href: "https://todo-app-three-bice.vercel.app/",
      gitlink:"https://github.com/Rutika-B/Instagram_clone",
    },
  ];
  return (
    <div
      name="Projects"
      className="h-auto w-full bg-gradient-to-b from-black via-black to-gray-800 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>
        <div className="w-full justify-center items-center grid grid-cols-1 gap-7 sm:grid-cols-2 text-center sm:px-0">
          {plist.map(({ id, title, href, src, desc, gitlink }) => (
            <Card
              key={id}
              className="w-96 shadow-sm bg-gradient-to-b from-cyan-100 to-blue-gray-700 rounded-lg hover:scale-110 duration-500"
            >
              <a href={href} target="_blank">
                <CardHeader
                  floated={false}
                  color="blue-gray"
                  className="relative h-70 m-1"
                >
                  <img
                    src={src}
                    className="object-cover h-56 w-full rounded-none"
                    alt="card-image"
                  />
                </CardHeader>
              </a>
                <CardBody> 
                  <div className="flex flex-row items-center justify-between mb-2">
                  <Typography variant="h5" color="blue-gray" >
                    {title}
                  </Typography>
                    <a href={gitlink} target="_blank">
                      <FaGithub size={30} color="black" />
                    </a>
                    
                  </div>
                  <Typography className="text-white">{desc}</Typography>
                </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
