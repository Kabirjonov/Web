import React, { useEffect } from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="contact" className="contact sec-pad">
      <Container>
        <div className="heading-sec heading-sec__mb-med ">
          <h2 className="heading-sec__main">Contact</h2>
          <h2 className="heading-sec__sub">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </h2>
        </div>

        <div className="contact__form">
          <div className="container">
            <form action="" className="form" data-aos="fade-zoom-in"data-aos-duration="800">
              <div className="contact__form-field">
                <label htmlFor="" className="contact__form-label">
                  name
                </label>
                <input
                  data-aos="fade-zoom-in"
                  // data-aos-easing="ease-in-back"
                  // data-aos-delay="300"
                  // data-aos-offset="0"
                  data-aos-duration='500'
                  type="text"
                  placeholder="Enter Your Name"
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-field">
                <label htmlFor="" className="contact__form-label">
                  email
                </label>
                <input
                  data-aos="fade-zoom-in"
                  // data-aos-easing="ease-in-back"
                  // data-aos-delay="300"
                  // data-aos-offset="0"
                  data-aos-duration='500'
                  type="email"
                  placeholder="Enter Your Email"
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-field">
                <label htmlFor="" className="contact__form-label">
                  Message
                </label>
                <textarea
                  data-aos="fade-zoom-in"
                  // data-aos-easing="ease-in-back"
                  // data-aos-delay="300"
                  // data-aos-offset="0"
                  data-aos-duration="500"
                  type="text"
                  cols="33"
                  rows="10"
                  placeholder="Enter Your Message"
                  className="contact__form-input"
                />
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <button className="EveryoneBtn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Contact;
