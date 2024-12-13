import React, { useEffect } from "react";
import "./Projects.css";
import data from '../data/data.json'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <>
      <section id="project" className="project sec-pad">
        <div className="container">
          <div className="heading-sec heading-sec__mb-med ">
            <h2 className="heading-sec__main">Projects</h2>
            <h2 className="heading-sec__sub">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </h2>
          </div>
          {/*  */}
          {data&&data.Projects.map(item=>(
          <div key={item.id} className="row project__blog">
          <div className="col-lg-7">
            <div className="projects__images" data-aos="fade-right" data-aos-duration="1500">
              <img src={require(`../Images/${item.image}`)} alt={item.link} />
            </div>
          </div>
          <div className="col-lg-5 ProjectRight" data-aos="zoom-out-up" data-aos-duration="1500">
            <h2 className="title">{item.title}</h2>
            <p className="discription">
             {item.description}
            </p>
            <button className="EveryoneBtn">{item.buttonTitle}</button>
          </div>
        </div>
          ))}
          {/*  */}
        </div>
      </section>
    </>
  );
};
export default Projects;
