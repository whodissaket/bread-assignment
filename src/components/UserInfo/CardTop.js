import "./CardTop.css";
import Button from "../Button";
import ContactBtn from "../ContactBtn";
import UserDetails from "./UserDetails";

function CardTop() {
  return (
    <div className="ctop__container">
      <div className="userAvatar d-flex justify-content-between align-items-start ">
        <div className="left fx-start">
          <div className="img__wrap">
            <img src="/images/janedoe.png" width="100" alt="user" />
          </div>
          <div className="items__wrap ml-1 flexed flex-wrap">
            <p className="mb-0 user__item col-5 text-center mr-auto my-1 mx-1">
              Yoga
            </p>
            <p className="mb-0 user__item col-5 text-center mr-auto my-1 mx-1">
              Wellness
            </p>
            <p className="mb-0 user__item col-5 text-center mr-auto my-1 mx-1">
              Fitness
            </p>
          </div>
        </div>
        <div className="right flex-col ">
          <Button>Book Trial</Button>
          <div className="divide my-2" />
          <ContactBtn >Contact Me</ContactBtn>
        </div>
      </div>

      <UserDetails />
    </div>
  );
}

export default CardTop;
