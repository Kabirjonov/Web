import React from "react";
import "./Home.css";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { Link } from "react-scroll";
const Home = () => {
  const toggle = true;

  return (
    <>
      <section className="home-hero">
        {/* <div className="row hidden_profile">
          <div className="col-lg-6 profile-img">
            <img src={require("../Images/LogoNav.jpg")} alt="Logo Img" />
          </div>
          <div className="col-lg-6 profile-text">
            <h2>Kabirjonov Oxunjon</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              libero, error quia blanditiis, facere inventore natus delectus
              fuga ullam culpa tempore esse, dignissimos veritatis officiis
              asperiores autem. Dolor, doloribus odit?
            </p>
            <ul>
              <li>Born: 08.04.2005</li>
              <li></li>
            </ul>
          </div>
        </div> */}
        <div className="home-hero__content text-center">
          <h1 className="heading-primary">Hey, I'm Kabirjonov Oxunjon</h1>
          <div className="home-hero__info">
            <p className="home-hero__text">
              A Result-Oriented Web Developer building and managing Websites and
              Web Applications that leads to the success of the overall product
            </p>
            <p className="home-hero__text two">
              Asallom alekum, This web site you know for me
            </p>
            <Link smooth spy to="project">
              <button className="EveryoneBtn">Projects</button>
            </Link>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__div">
            <a href="https://t.me/kabirjonov_0">
              <FaTelegram className="home-hero__icons" />
            </a>
          </div>
          <div className="home-hero__div">
            <a href="https://github.com/Kab1rjonov">
              <FaGithub className="home-hero__icons" />
            </a>
          </div>
          <div className="home-hero__div">
            <a href="https://www.instagram.com/kab1rjonov_o/">
              <FaInstagramSquare className="home-hero__icons" />
            </a>
          </div>
          <div className="home-hero__div">
            <FaLinkedin className="home-hero__icons" />
          </div>

          <div className="home-hero__div">
            <IoBook className="home-hero__icons" />
          </div>
        </div>
        <div className="home-hero__mouse-scroll">
          <div className="mouse"></div>
        </div>
      </section>
    </>
  );
};
export default Home;
