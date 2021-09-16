import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaSpotify,
  FaLinkedin,
} from "react-icons/fa";
import "./UserDetails.css";
import { GoLocation } from "react-icons/go";
import { IoIosChatboxes } from "react-icons/io";

function UserDetails() {
  return (
    <div className="userd__container">
      <h3 className="mb-2 user__name">Jane Doe</h3>

      <p className="mb-0 user__bio mt-2">
        Hi, I am Jane Doe, your next door fitness instructor with just one goal
        - Make people fit and healthy. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quidem dolorem sit quas, provident numquam error
        maiores impedit ipsam. Autem, distinctio.
      </p>

      <div className="user__icons-wrap flex-btw px-3 py-2 my-2 col-lg-6">
        <span className="socials__insta">
          {""}
          <FaInstagram />{" "}
        </span>
        <span className="socials__fb">
          {""}
          <FaFacebookF />{" "}
        </span>{" "}
        <span className="socials__yt">
          {""}
          <FaYoutube />{" "}
        </span>{" "}
        <span className="socials__tw">
          {""}
          <FaTwitter />{" "}
        </span>{" "}
        <span className="socials__sp">
          {""}
          <FaSpotify />{" "}
        </span>{" "}
        <span className="socials__li">
          {""}
          <FaLinkedin />{" "}
        </span>
      </div>
      <div className="divide"></div>

      <div className="locationWrap d-flex justify-contentt-start align-items-center my-3">
        <p className="mr-2 mb-0 p__location">
          <span className="locationIcon">
            <GoLocation />
          </span>{" "}
          Lives in{" "}
        </p>
        <span className="locationValue ml-3">Tokyo</span>
      </div>

      <div className="locationWrap d-flex justify-contentt-start align-items-center my-3">
        <p className="mr-2 mb-0 p__location">
          <span className="chatIcon mr-2">
            <IoIosChatboxes />
          </span>
          Speaks
        </p>
        <span className="locationValue mx-3">English</span>
        <span className="locationValue mx-3">Hindi</span>
        <span className="locationValue mx-3">Punjabi</span>
      </div>
    </div>
  );
}

export default UserDetails;

