import React from "react";
import "./CardMain.css";
import CardTop from "./CardTop";
import Thumbnail from "./Thumbnail";
import UserCardFooter from "./UserCardFooter";

function CardMain() {
  return (
    <div className="cmain__container p-2 col-lg-6 col-md-8">
      <CardTop />
      <Thumbnail />
      <UserCardFooter />
    </div>
  );
}

export default CardMain;
