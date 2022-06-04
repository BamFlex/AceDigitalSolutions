import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../Assets/logo.png";
import Freelancers from '../Assets/freelancersImg.png'
import Upwork from '../Assets/upworkImg.png'
import Fiverr from '../Assets/fiverrImg.png'

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-sm shadow-[#040c16]">
      <div className="md:ml-6 mt-4">
        <img src={logo} alt="logo" style={{ width: "100px" }} />
      </div>
      {/* Menu */}

      <ul className="hidden md:flex">
        <li className="hover:text-pink-600"><Link activeClass="active" to="home" smooth={true} duration={500} >
          Home
        </Link></li>
        <li className="hover:text-pink-600">
        <Link activeClass="active" to="about" smooth={true} duration={500} >
          About
        </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link activeClass="active" to="skills" smooth={true} duration={500} >
          Skills
        </Link>
        </li>
        <li className="hover:text-pink-600">
          <Link activeClass="active" to="cms" smooth={true} duration={500} >
          CMS
        </Link>
        </li>
        <li className="hover:text-pink-600">
        <Link activeClass="active" to="work" smooth={true} duration={500} >
          Works
        </Link>
        </li>
        <li className="hover:text-pink-600">
        <Link activeClass="active" to="contact" smooth={true} duration={500} >
          Contact
        </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-4 text-4xl"><Link onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500} >
          Home
        </Link></li>
        <li className="py-4 text-4xl"><Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500} >
          About
        </Link></li>
        <li className="py-4 text-4xl"><Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
        <li className="py-4 text-4xl"><Link onClick={handleClick} activeClass="active" to="work" smooth={true} duration={500} >
          Works
        </Link></li>
        <li className="py-4 text-4xl"><Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex  flex-col absolute top-[240%] left-0">
        <ul>
          {/* <li className="w-[160px] h-[60px] justify-between items-center p-4 ml-[-100px] hover:ml-[-10px] duration-700 bg-blue-500">
            <a
              className="flex justify-between items-end relative w-full text-gray-300"
              href="#"
            >
              Linkedin
              <FaLinkedin size={30}  />
            </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between items-center p-4 ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]">
            <a
              className="flex w-full justify-between items-center text-gray-300"
              href="#"
            >
              Linkedin
              <FaGithub size={30} />
            </a>
          </li> */}
          <li className="w-[160px] h-[60px] justify-between items-center p-4 ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-200">
            <a
              className="flex w-full justify-between items-center relative text-[#139f00]"
              href="https://www.upwork.com/freelancers/~01342f29afc9e3ec9e" target="_blank"
            >
              Upwork
              <img className="w-[55px] h-[55px] absolute top- right-[-14px]" src={Upwork} alt="upwork" />
              
            </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between items-center p-4 ml-[-100px] hover:ml-[-10px] duration-500 bg-[#fff]">
            <a
              className="flex w-full justify-between items-center relative text-[#1cb56d]"
              href="https://fiverr.com/ace_mobweb" target="_blank"
            >
              Fiverr
              <img className="w-[55px] h-[30px] absolute top- right-[-14px]" src={Fiverr} alt="upwork" />
              
            </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between items-center p-4 ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]">
            <a
              className="flex w-full justify-between items-center text-gray-100"
              href="mailto:adelekebamidelefelix@gmail.com" target="_blank"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between items-center p-4 ml-[-100px] hover:ml-[-10px] duration-500 bg-[#0181d7]">
            <a
              className="flex w-full justify-between items-center relative text-[#fff]"
              href="https://www.freelancer.com/Ad3l3k3" target="_blank"
            >
              Freelancer
              <img className="w-[55px] h-[55px] absolute top- right-[-14px]" src={Freelancers} alt="Freelancer" />
              
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
