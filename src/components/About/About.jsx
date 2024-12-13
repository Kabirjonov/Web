import React, { useEffect } from "react";
import "./About.css";
import data from '../data/data.json'
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section id="about" className="about sec-pad">
      <div className="container">
        <div className="heading-sec">
          <h2 className="heading-sec__main">About Me</h2>
          <h2 className="heading-sec__sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </h2>
        </div>
        <div className="row about__heading">
          <div className="col-lg-6 colForleft">
            <h2 className="about__skills-title">Get to know me!</h2>
            <p data-aos="fade-right" data-aos-duration="500">
              I'm a{" "}
              <span className="shref-bold">Frontend Focused Web Developer</span>{" "}
              building and managing the Front-end of Websites and Web
              Applications that leads to the success of the overall product.
              Check out some of my work in the
              <span className="shref-bold"> Projects</span> section.
            </p>
            <p data-aos='fade-right' data-aos-duration="700">
              I also like sharing content related to the stuff that I have
              learned over the years in{" "}
              <span className="shref-bold">Web Development</span> so it can help
              other people of the Dev Community. Feel free to Connect or Follow
              me on my{" "}
              <span className="shref-bold LinkFordirect">
                <a
                  href="https://t.me/kabirjonov_0"
                  target="_blank"
                  rel="noopener noreferrer"
                >Telegram</a>
              </span>{" "}
              and{" "}
              <span className="shref-bold LinkFordirect">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >Instagram</a>
              </span>{" "}
              where I post useful content related to Web Development and
              Programming{" "}
            </p>
            <p data-aos='fade-right' data-aos-duration="900">
              I'm open to <span className="shref-bold">Job</span> opportunities
              where I can contribute, learn and grow. If you have a good
              opportunity that matches my skills and experience then don't
              hesitate to <span className="shref-bold">contact</span> me.{" "}
            </p>
            <Link spy to='contact'>
              <button className='EveryoneBtn' data-aos="fade-up" data-aos-duration="1000">Contact</button>
            </Link>

          </div>
          <div className="col-lg-6 colForleft">
            <h2 className="about__skills-title">my skills</h2>
            <div className="about__div-skills">
              {data && data.Skills.map(item => (
                <>
                  
                  <div key={item.id} className="about__skill" data-aos="fade-right" data-aos-duration={item.id}>{item.name}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
