import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4gci3ns",
        "template_j6z82hf",
        e.target,
        "user_YP1kijE4OfOFQfPme0L3Y"
      )
      .then(
        (result) => {
          alert("Message Send Successfully");
        },
        (error) => {
          alert("Message Send uuccessfully");
        }
      );
    e.target.reset();
  }
  return (
    <div className="row">
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="col-8 mx-auto pt-4">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Subject"
          />
        </div>
        <div className="col-8 mx-auto pt-4">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="col-8 mx-auto pt-4">
          <textarea
            className="form-control"
            name="message"
            cols="8"
            rows="12"
            placeholder="Your Message"
          />
        </div>
        <div className="col-8 mx-auto pt-4">
          <input className="btn btn-primary" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
