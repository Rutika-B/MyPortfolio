import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Icon } from "@iconify/react";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rutika61/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Rutika-B",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:rutikabhuimbar@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Leetcode <Icon icon="simple-icons:leetcode" width={30} height={30} />
        </>
      ),
      href: "https://leetcode.com/__Rutika__/",
    },
    {
      id: 5,
      child: (
        <>
          Codechef <Icon icon="simple-icons:codechef" width={30} height={30} />
        </>
      ),
      href: "https://www.codechef.com/users/rutub_123",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className='hidden md:flex flex-col top-[25%] left-0 fixed z-10'>
      <ul>

      {links.map(({id,child,href,style,download})=>(
        <li key={id} className={"flex justify-between items-center ml-[-100px] w-40 px-3 h-14 hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"+" "+style}>
          <a href={href} target="_blank" className='flex pl-5 justify-between items-center text-white w-full'>
            {child}
          </a>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default SocialLinks