import { InputGroup } from "react-bootstrap";
import Button from "../Button";
import "./UserCardFooter.css";

function UserCardFooter() {
  return (
    <div className="userc__footer">
      <div className="wrap col mx-auto py-2">
        <p className="footer__top">
          Subscribe to my profile and never miss another update from me.
        </p>
        <InputGroup className="mb-3">
          <input
            type="text"
            placeholder="Enter your Email"
            className="col mr-4 py-1 "
          />
          <Button>Subscribe</Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default UserCardFooter;
