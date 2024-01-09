import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer">
      <Link to="/" className=" font" onClick={scrollToTop}>
        Cosmic Chronicles
      </Link>
      <ul className="permalinks" onClick={scrollToTop}>
        <li className="nav-item">
          <Link exact to="/">
            Latest Updates
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blogs">Astro Blogs</Link>
        </li>
        <li className="nav-item">
          <Link to="/apod">Picture of the Day</Link>
        </li>
      </ul>
      <div className="footer__socials">
        <Link
          to="https://www.linkedin.com/in/priya-makkar-851973223"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </Link>
        <Link
          to="https://github.com/Priya-git21"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </Link>
      </div>
      <div className="footer__copyright">
        <small>&copy; Priya Makkar. 2023. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;