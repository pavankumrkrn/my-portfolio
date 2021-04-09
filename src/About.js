import { Certificates } from "./AboutComponents/Certificates";
import { Education } from "./AboutComponents/Education";
import { Experience } from "./AboutComponents/Experience";
import { Profile } from "./AboutComponents/Profile";
import { Technologies } from "./AboutComponents/Technologies";
import "./about.css";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export const About = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <div className="container mb-5" id="About">
        <div className="row">
          <div className="col-sm-6">
            <Profile />
          </div>
          <div className="col-sm-6">
            <Experience />
          </div>
        </div>
        <hr className="aboutHr" data-aos="fade-up" />
        <div className="row">
          <div className="col-sm-7">
            <Technologies />
          </div>
          <div className="col-sm-5">
            <Certificates />
          </div>
        </div>
        <hr className="aboutHr" data-aos="fade-up" />
        <Education />
      </div>
    </>
  );
};
