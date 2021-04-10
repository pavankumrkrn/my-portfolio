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
      <p className="textXL text-white text-center">Certifications</p>
      {certificates.map((i, index) => {
        return (
          <div className="card cerf" key={index}>
            <div
              className="card-body"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p className="h6 text-center text-white">{i.org}</p>
              <p className="text-center text-white">{i.cer}</p>
              <p
                className="text-right"
                data-aos="flip-left"
                data-aos-duration="1500"
              >
                <button
                  className="btn btn-success btn-sm button"
                  onClick={() => {
                    window.open(i.url);
                  }}
                >
                  View
                </button>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
