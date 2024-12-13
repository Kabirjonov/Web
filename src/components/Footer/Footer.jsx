import React from "react";
import "./Footer.css";
import { FaGithub, FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <section id="footer" className="sec-pad footer">
        <div className="container text-center">
          <div className="row pb-5 border-bottom">
            <div className="col-lg-4 footer__left-div">
              <h3>oxunjon Kabirjonov</h3>
              <p>
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product{" "}
              </p>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4 footer__right-div">
              <h3>Social</h3>
              <div className="footer__links-icons">
                <div className="link">
                  <FaInstagram />
                </div>
              
                <div className="link">
                  <FaGithub />
                </div>
                <div className="link">
                  <FaTelegramPlane />
                </div>
              
                <div className="link">
                  <FaFacebook />
                </div>
                <div className="link">
                  <FaTiktok />
                </div>
              </div>
            </div>
          </div>
          <p className="text-center footer__text">
          © Copyright
          <script>document.write(new Data().getFullYear())</script>. Made by <a href="">Kabirjonov Oxunujon</a>
          </p>
        </div>
      
      </section>

    </>
  );
};
export default Footer;
