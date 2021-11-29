// import React, { useEffect } from "react";
import "./Banner.css";
import Typical from "react-typical";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Banner = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <div className="banner">
      <div className="conatiner">
        <div className="row">
          <div className="col-md-6 banner-text">
            <h2 className="heading1">
              <span className="miniheading">Hey I am</span> <br /> AKASH ISLAM
              SUMON
            </h2>
            <h2 className="heading2">
              <Typical
                steps={[
                  "MERN Stack Developer",
                  1500,
                  "Programmer",
                  1500,
                  "Front-end Developer",
                  1500,
                ]}
                loop={Infinity}
                wrapper="b"
              />
            </h2>
            {/* data-aos="fade-left" data-aos-duration="3000" */}

            <p>
              " Everything is possible " i have Strong knowledge in responsive
              design with HTML5, CSS3, flexbox, Bootstrap, ES6 JavaScript. I
              also have solid knowledge working with React, React Router, Node
              Js, Express js, MongoDB, Firebase, Heroku.
            </p>

            <br />
            {/*  data-aos="zoom-in-down"
              data-aos-duration="3000" */}
            <a href="https://drive.google.com/file/d/1QuGThPf7BisN-Pt93-0aQ2tgFAfYFcLa/view?usp=sharing">
              <button>Resume</button>
            </a>
          </div>
          <div className="col-md-6 bannering">
            <img
              src="https://i.ibb.co/3d0mz7t/Akash-2-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
