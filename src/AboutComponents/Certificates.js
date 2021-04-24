import { AppendTalk } from "../TalkingComponents/appendTalk";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./certificates.css";
import { certificates } from "../Shared/ArraysandObjects/SkillsObject";
export const Certificates = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <p
        className="textXL text-white text-center mb-5"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Certifications
      </p>
      {certificates.map((i, index) => {
        return (
          <div className="card cerf m-1" key={index}>
            <div
              className="card-body"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="row">
                <div className="col-8">
                  <p className="h6 text-center text-white">{i.org}</p>
                  <p
                    className="text-center text-white"
                    style={{ fontSize: "small" }}
                  >
                    {i.cer}
                  </p>
                </div>
                <div className="col-4 text-left">
                  <button
                    className="btn btn-success btn-sm button"
                    data-aos="flip-left"
                    onClick={() => {
                      window.open(i.url);
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
