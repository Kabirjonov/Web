import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo_img from "../Images/LogoNav.jpg";
import "./Nav.css";
import { Link } from "react-scroll";
import data from "../data/data.json";
import React from "react";
const BasicNav = (props) => {
  return (
    <section id="home">
      <Navbar expand="md" className="header">
        <div className="container-fluid">
          <Navbar.Brand
            href=""
            className="header__logo d-flex align-items-center m-2"
          >
            <div className="header__img-div">
              <img src={Logo_img} alt="" className="header__logo-img " />
            </div>
            <h2 className="header__logo-text">
              <Link smooth className="d-flex grey01" spy to="home">
                Kabirjonov O
              </Link>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              {data.Navbar.map((item) => (
                <Link
                  className="nav__link"
                  duration={500}
                  defaultChecked
                  smooth
                  spy
                  to={item.title}
                >
                  {item.title}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </section>
  );
};

export default BasicNav;
