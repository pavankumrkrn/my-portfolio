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
      <div className="" id="About">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <Profile />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <Experience />
          </div>
        </div>
        <hr className="aboutHr" data-aos="fade-up" />
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 mt-5">
            <Technologies />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
            <Certificates />
          </div>
        </div>
        <hr className="aboutHr" data-aos="fade-up" />
        <Education />
      </div>
    </>
  );
};
