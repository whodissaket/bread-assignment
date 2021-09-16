import React from "react";
import "./Thumbnail.css";
import { RiArrowRightFill } from "react-icons/ri";

function Thumbnail() {
  return (
    <div className="thumb__container flexed p-3">
      <div className="thumb__left px-2">
        <p className="mb-0 thumb__advert">
          Check out my video about 30 min yoga for beginners.
        </p>

        <p className="mb-0 mt-3 contact">
          Contact me
          <span className="contact__arrow ml-2">
            <RiArrowRightFill />
          </span>
        </p>
      </div>
      <div className="thumb__right ml-2">
        <div className="img__wrap p-1">
          <img
            className="img__thumb"
            src="/images/yoga-yt.png"
            alt="thumbnail_yt"
          />
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
