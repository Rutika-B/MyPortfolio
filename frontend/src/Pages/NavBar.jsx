import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
  const [flag, setflag] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Projects",
    },
    {
      id: 5,
      link: "Coding Profile",
    },
    {
      id: 6,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between z-30 items-center w-full h-20 fixed bg-black text-white px-4">
      <div>
        <h1 className="text-3xl font-signature z-10 ml-3">Rutika</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer text-lg capitalize mx-5 hover:scale-110"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setflag(!flag)}
        className="cursor-pointer z-10 md:hidden"
      >
        {flag ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {flag && (
        <ul className="flex flex-col items-center justify-center absolute h-screen w-full top-0 left-0 bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li className="cursor-pointer px-4 py-6 capitalize" key={id}>
              <Link
                onClick={() => setflag(!flag)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
