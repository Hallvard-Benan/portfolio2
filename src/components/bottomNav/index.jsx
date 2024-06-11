import React from "react";
import { FaAddressCard, FaFolderOpen } from "react-icons/fa";
import { FaHouse, FaMessage } from "react-icons/fa6";

export default function BottomNav({ visible, activeSections }) {
  const [projects, about, contact] = activeSections;

  return (
    <ul
      className={`projects-nav ${visible && "stuck"}`}
      aria-label="section navigation"
    >
      <a className="nav-home" href="#hero" role="link">
        <span className="visually-hidden">Back to top</span>
        <p className="tooltip">To top</p>
        <FaHouse />
      </a>
      <a
        className={`nav-projects ${projects && "active"}`}
        href="#projects"
        role="link"
      >
        <span className="visually-hidden">Projects</span>
        <p className="tooltip">Projects</p>
        <FaFolderOpen />
      </a>
      <a className={`nav-about ${about && "active"}`} href="#about" role="link">
        <span className="visually-hidden">About</span>
        <p className="tooltip">About</p>
        <FaAddressCard />
      </a>
      <a
        className={`nav-contact ${contact && "active"}`}
        href="#contact"
        role="link"
      >
        <span className="visually-hidden">contact me</span>
        <p className="tooltip">contact</p>
        <FaMessage />
      </a>
    </ul>
  );
}
