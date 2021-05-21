import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./certificates.css";

export const Experience = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="mt-5" data-aos-duration="1500" data-aos="fade-left">
      <div className="">
        <p className="textXL text-white text-center">Work Experience</p>
      </div>
      <div className="row mt-5">
        <div
          className="col-5 text-white text-right"
          data-aos-duration="1500"
          data-aos="fade-right"
        >
          <p className="text">SD MacTec IT Solutions Pvt Ltd</p>
        </div>
        <div className="col-2 text-white text-center">
          <p className="">|</p>
        </div>
        <div
          className="col-5 text-white text-left"
          data-aos-duration="1500"
          data-aos="fade-left"
        >
          <p className="text">Java Developer (Intern)</p>
          <p>Oct-2019 to Nov-2020</p>
        </div>
      </div>
      <div className="" data-aos-duration="1500" data-aos="fade-up">
        <p className="text-left text-white text">
          As a Java developer Intern my roles and responsibilities are to
          design, develop, and maintain java application. Conduct software
          analysis, programming, testing, and debugging, as well as recommending
          changes to improve the established processes.
        </p>
      </div>
    </div>
  );
};
