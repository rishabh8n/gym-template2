import React, { useEffect, useState } from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "./header.css";
const Header = () => {
  const [active, setActive] = useState(false);
  // const handleScroll = (e) => {
  //   e.preventDefault();
  // };
  // useEffect(() => {
  //   if (active) {
  //     window.addEventListener("scroll", handleScroll);
  //   }
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [active]);
  return (
    <>
      <header className="primary-header">
        <HashLink className="logo" smooth to="/">
          <span>GYM</span>
          <span>24</span>
        </HashLink>
        <nav className="primary-navigation">
          <ul role="list" className="nav-links">
            <li>
              <HashLink className="active | fs-600" smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink className="active | fs-600" smooth to="/#pricing">
                Pricing
              </HashLink>
            </li>
            <li>
              <HashLink className="active | fs-600" smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink className="active | fs-600" smooth to="/#trainer">
                Trainers
              </HashLink>
            </li>
            <li>
              <HashLink className="active | fs-600" smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
        <button className="button header_button | bg-accent-400 text-neutral-100">
          Call Now
        </button>
        <button
          className={`menu-btn ${active ? "active" : ""}`}
          onClick={() => setActive((prev) => !prev)}
        >
          <svg
            width={35}
            viewBox="0 0 100 100"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="var(--color)"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m 10 40 h 62 c 15 1 10 34 0 30 l -38 -38" />
            <path d="m 10 55 h 70" />
            <path d="m 10 70 h 62 c 15 1 10 -34 0 -30 c 0 0 0 0 -38 38" />
          </svg>
        </button>
      </header>
      <div className={`sidebar ${!active ? "collapse" : ""}`}>
        <nav className="sidebar-navigation">
          <ul role="list" className="nav-links">
            <li>
              <HashLink
                onClick={() => setActive(false)}
                className="active | fs-600"
                smooth
                to="/#about"
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                onClick={() => setActive(false)}
                className="active | fs-600"
                smooth
                to="/#services"
              >
                Services
              </HashLink>
            </li>
            <li>
              <HashLink
                onClick={() => setActive(false)}
                className="active | fs-600"
                smooth
                to="/#pricing"
              >
                Pricing
              </HashLink>
            </li>
            <li>
              <HashLink
                onClick={() => setActive(false)}
                className="active | fs-600"
                smooth
                to="/#trainer"
              >
                Trainers
              </HashLink>
            </li>
            <li>
              <HashLink
                onClick={() => setActive(false)}
                className="active | fs-600"
                smooth
                to="/#contact"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
