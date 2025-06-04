import React from "react";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer-bg-white text-dark py-4">
      <Container>
        <Row className="text-center">
          <Col md={12}>
            <div className="mb-4">
              <a href="#" aria-label="Facebook" className="footer-icon-round">
                <FiFacebook size={22} />
              </a>
              <a href="#" aria-label="Twitter" className="footer-icon-round">
                <FiTwitter size={22} />
              </a>
              <a href="#" aria-label="LinkedIn" className="footer-icon-round">
                <FiLinkedin size={22} />
              </a>
              <a href="#" aria-label="YouTube" className="footer-icon-round">
                <FiYoutube size={22} />
              </a>
            </div>
            <div className="footer-text">
              <div className="mb-3">Example@email.com</div>
              <div>Copyright © 2020 Name. All rights reserved.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
