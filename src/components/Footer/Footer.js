import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  let year = new Date();
  return (
    <footer>
      <Container className="py-2">
        <Row>
          <Col lg={3}>
            <div className="fw-bold">
              <img
                alt=""
                src="https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png"
                width="70"
              />{" "}
              CHEF FOOD
            </div>
            <p>
              Copyright &copy; haqftyt {year.getFullYear()}
              &nbsp;.
            </p>
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              width="150"
              />
          </Col>
          <Col className="py-3">
            <p className="fw-bold">Company</p>
              <p>Home</p>
              <p>Food Menu</p>
              <p>Location</p>
          </Col>
          <Col className="py-3">
          <p className="fw-bold">Services</p>
              <p>Marriage Orders</p>
              <p>Catering and Foods</p>
              <p>Bulk Orders</p></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
