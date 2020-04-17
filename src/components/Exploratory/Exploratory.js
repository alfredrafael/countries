import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactLogo from "../elements/ReactLogo";

const Exploratory = () => {
  return (
    <React.Fragment>
      <Row style={{ background: "blue" }}>
        <Container style={{ display: "flex", background: "azure" }}>
          <Col style={{ flex: 1 }}>
            <ReactLogo />
          </Col>
          <Col style={{ flex: 10 }}>
            <h1>
              <strong>Welcome</strong>, Alfredo! <br />
              This is your boilerplate ^_^
              <br />
            </h1>
            <hr />
            If the react-logo "bounces" in, the <strong>
              react-reveal
            </strong>{" "}
            library was succesfully installed and working as intended &nbsp;{" "}
            <input type="checkbox" style={{ transform: "scale(2)" }} />
            <br />
            <br />
            If this background is blue, layed out as a row and a container, your{" "}
            <strong>"reactstrap"</strong> is working as intended &nbsp;{" "}
            <input type="checkbox" style={{ transform: "scale(2)" }} />
            <br />
            <br />
            If you see a home icon here: &nbsp;
            <i className="fas fa-home" style={{ color: "black" }}>
              {" "}
              &nbsp;{" "}
            </i>
            , then the <strong>"fontAwesome"</strong> library was successfully
            installed and its working as intended &nbsp;{" "}
            <input type="checkbox" style={{ transform: "scale(2)" }} />
            <br />
            <br />
            If you change the url to "/", or click <Link to="/"> here </Link> it
            works, your <strong>"react-router" </strong>is working &nbsp;{" "}
            <input type="checkbox" style={{ transform: "scale(2)" }} />
            <br />
            <br />
          </Col>
        </Container>
      </Row>{" "}
    </React.Fragment>
  );
};

export default Exploratory;
