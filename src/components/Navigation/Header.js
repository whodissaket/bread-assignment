import "./Header.css";
import { Container, Row } from "react-bootstrap";

function Header() {
  return (
    <Container fluid>
      <Row>
        <div className="flexed p-4 mx-auto col mb-3 header__container">
          <div className="title__container col-lg-8">
            <p className="mb-0 title__header text-center text-white">
              Start your day with the <br /> goodness of yoga
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Header;
