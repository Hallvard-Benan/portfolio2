import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="nav-menu">
        <div className="hamburger-menu">
          <label
            htmlFor="check"
            className="menu-btn"
            role="button"
            tabIndex="0"
            aria-label="menu button"
          >
            <input
              type="checkbox"
              id="check"
              checked={menuOpen}
              onClick={toggleOpen}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <ul className={`container nav-menu__list ${menuOpen && " open"}`}>
          <li className="nav-menu__item " onClick={toggleOpen}>
            <a href="#projects" className="nav-menu__link">
              <i className="fa-solid fa-folder-open"></i>Projects{" "}
            </a>
          </li>
          <li className="nav-menu__item" onClick={toggleOpen}>
            <a href="#about" className="nav-menu__link">
              <i className="fa-solid fa-address-card"></i>About me
            </a>
          </li>
          <li className="nav-menu__item" onClick={toggleOpen}>
            <a href="#about" className="nav-menu__link">
              <i className="fa-solid fa-address-card"></i>Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
