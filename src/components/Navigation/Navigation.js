import React, { useState } from "react";
import "./Navigation.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex-btw px-3 py-2 nav__container">
      <div className="nav__left">
        <h4 className="nav__title mb-0 text-white">bre.ad/jane</h4>
      </div>

      <div
        className={`${showSidebar && "show__sidebar"} nav__right flexed col`}
      >
        <ul className="flexed my-auto py-1 ml-auto">
          <li
            href="#Offerings"
            className="nav__right-item text-white"
            onClick={() => setShowSidebar(false)}
          >
            Offerings
          </li>
          <li
            href="#OtherLinks"
            className="nav__right-item text-white"
            onClick={() => setShowSidebar(false)}
          >
            Other Links
          </li>{" "}
          <li
            href="#Testimonials"
            className="nav__right-item text-white"
            onClick={() => setShowSidebar(false)}
          >
            Testimonials
          </li>{" "}
          <li
            href="#Portfolio"
            className="nav__right-item text-white"
            onClick={() => setShowSidebar(false)}
          >
            Portfolio
          </li>{" "}
          <li
            href="#ContactMe"
            className="nav__right-item text-white"
            onClick={() => setShowSidebar(false)}
          >
            Contact me
          </li>
          <p className="trial mb-0" onClick={() => setShowSidebar(false)}>
            Book Trial
          </p>
        </ul>
      </div>

      <div
        className="hamburger__container flexed"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? (
          <FaTimes className="hamburger" />
        ) : (
          <GiHamburgerMenu className="hamburger" />
        )}
      </div>
    </div>
  );
}

export default Navigation;
