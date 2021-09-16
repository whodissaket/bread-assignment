import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <div className=" flex-btw  flex-wrap footer__container">
      <div className="footer__left">
        <div className="footer__left-title flexed mb-0 ">
          <p className="mb-0">Powered by</p>
          <span className="footer__logo ml-2 mb-2">
            <img src="/images/bread-logo.png" width="70" alt="bread" />
          </span>
        </div>

        <div className="icons__wrap flex-btw">
          <span className="mx-auto footer__icon_insta">
            <FaInstagram />
          </span>{" "}
          <span className="mx-auto footer__icon_fb">
            <FaFacebookF />
          </span>{" "}
          <span className="mx-auto footer__icon_tw">
            <FaTwitter />
          </span>{" "}
          <span className="mx-auto footer__icon_li">
            <FaLinkedin />
          </span>
        </div>
      </div>
      <div className="footer__right">
        <p className="copyTitle text-white mb-0">
          <span className="copyIcon">
            <MdCopyright />{" "}
          </span>
          Bread 2021. All rights reserved.
        </p>

        <div className="flexed">
          {/* {footerRightItems.map((item, index) => (
            <p key={index + 1} className="mb-0 mx-auto footer__right-item">
              {item}
            </p>
          ))} */}
          <p className="mb-0 mx-auto footer__right-item">Terms</p>
          <p className="mb-0 mx-auto footer__right-item">Privacy</p>
          <p className="mb-0 mx-auto footer__right-item">About</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
