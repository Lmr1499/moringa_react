import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav>
        <div className="openbtn" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="hobbies" smooth={true} duration={500}>
              Hobbies
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar" style={{ left: sidebarOpen ? "0" : "-250px" }}>
        <a className="closebtn" onClick={toggleSidebar}>
          <FaTimes />
        </a>
        <Link to="home" smooth={true} duration={500} onClick={toggleSidebar}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={toggleSidebar}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={toggleSidebar}>
          Skills
        </Link>
        <Link to="hobbies" smooth={true} duration={500} onClick={toggleSidebar}>
          Hobbies
        </Link>
      </div>
    </>
  );
};

export default Navbar;
