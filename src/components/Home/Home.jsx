import React, { useState,useContext } from "react";
import "./Home.css";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { Link } from "react-scroll";
import ProfileContext  from './ProfileContext'
import Profile from "./Profile";

const Home = () => {
  const {show,setShow} = useContext(ProfileContext)

  return (
    <>
    <Profile/>
      <section className="home-hero">
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
            <Link spy to="contact">
              <button className="EveryoneBtn">Projects</button>
            </Link>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__div">
            <a
              href="https://t.me/kabirjonov_0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="home-hero__icons" />
            </a>
          </div>
          <div className="home-hero__div">
            <a
              href="https://github.com/Kabirjonov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="home-hero__icons" />
            </a>
          </div>
          <div className="home-hero__div">
            <a
              href="https://www.instagram.com/kab1rjonov_o/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="home-hero__icons" />
            </a>
          </div>

          <div className="home-hero__div">
            <IoBook
              className="home-hero__icons"
              onClick={()=>setShow(!show)} // Holatni boshqarish
            />
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
