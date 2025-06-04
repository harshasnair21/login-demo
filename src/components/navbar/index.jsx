import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "../../redux/slices/countrySlice";
import { Navbar as RBNavbar, Container, Nav } from "react-bootstrap";
import "./index.css";

const regions = ["All", "Asia", "Europe"];

const Navbar = () => {
  const dispatch = useDispatch();
  const selectedRegion = useSelector((state) => state.country.selectedRegion);

  return (
    <RBNavbar bg="white" expand="md" className="navbar-custom mb-3">
      <Container>
        <RBNavbar.Brand className="navbar-title fw-bold">
          Countries
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-tabs">
            {regions.map((region) => (
              <Nav.Link
                key={region}
                active={selectedRegion === region}
                className={`navbar-tab${
                  selectedRegion === region ? " active" : "clickable"
                }`}
                onClick={() => dispatch(setRegion(region))}
              >
                {region}
              </Nav.Link>
            ))}
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
