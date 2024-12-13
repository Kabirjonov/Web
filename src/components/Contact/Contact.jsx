import React, { useEffect, useState } from "react";
import "./Contact.css";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Loading indikatorini faollashtirish

    emailjs
      .sendForm(
        "service_h0hg75q", // O'zingizning EmailJS service_id
        "template_31kvcu8", // O'zingizning EmailJS template_id
        e.target,
        "kyjFVHb7ljc8vdXCU" // O'zingizning EmailJS user_id
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email muvaffaqiyatli yuborildi!"); // Toast orqali muvaffaqiyat xabari
          setName(""); // Formani tozalash
          setLastName("");
          setEmail("");
          setMessage("");
          setIsLoading(false); // Loading indikatorini o‘chirish
        },
        (error) => {
          console.log(error.text);
          toast.error(`Xatolik yuz berdi: ${error.text}`); // Toast orqali xatolik xabari
          setIsLoading(false); // Xatolikda ham loading indikatorini o‘chirish
        }
      );
  };

  return (
    <section id="contact" className="contact sec-pad">
      <Toaster position="top-right"  /> {/* Toaster komponentini qo‘shing */}
      <Container>
        <div className="heading-sec heading-sec__mb-med">
          <h2 className="heading-sec__main">Contact</h2>
          <h2 className="heading-sec__sub">
            Feel free to contact me by submitting the form below and I will get
            back to you as soon as possible
          </h2>
        </div>

        <div className="contact__form">
          <div className="container">
            <form
              onSubmit={sendEmail}
              className="form"
              data-aos="fade-zoom-in"
              data-aos-duration="800"
            >
              <div className="row">
                <div className="col">
                  <div className="contact__form-field">
                    <label htmlFor="" className="contact__form-label">
                      Name
                    </label>
                    <input
                      data-aos="fade-zoom-in"
                      data-aos-duration="500"
                      placeholder="Enter Your Name"
                      className="contact__form-input"
                      type="text"
                      name="user_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="contact__form-field">
                    <label htmlFor="" className="contact__form-label">
                      Last Name
                    </label>
                    <input
                      data-aos="fade-zoom-in"
                      data-aos-duration="500"
                      placeholder="Enter Your Last Name"
                      className="contact__form-input"
                      type="text"
                      name="user_lastname"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="contact__form-field">
                <label htmlFor="" className="contact__form-label">
                  Email
                </label>
                <input
                  data-aos="fade-zoom-in"
                  data-aos-duration="500"
                  placeholder="Enter Your Email"
                  className="contact__form-input"
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="contact__form-field">
                <label htmlFor="" className="contact__form-label">
                  Message
                </label>
                <textarea
                  data-aos="fade-zoom-in"
                  data-aos-duration="500"
                  cols="33"
                  rows="10"
                  placeholder="Enter Your Message"
                  className="contact__form-input"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <button className="EveryoneBtn" disabled={isLoading}>
                  {isLoading ? "Yuborilmoqda..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
