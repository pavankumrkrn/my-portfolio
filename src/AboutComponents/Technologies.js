import { AppendTalk } from "../TalkingComponents/appendTalk";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { skillsObj } from "../Shared/ArraysandObjects/SkillsObject";
import "./certificates.css";

export const Technologies = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <p className="textXL text-white text-center" data-aos="fade-left">
        Tools and Technologies
      </p>

      <div className="card" data-aos="zoom-in">
        <div className="card-body">
          <div className="row">
            {skillsObj.map((i, index) => {
              return (
                <div className="col-2 p-2">
                  <div className="card noBo" key={index}>
                    <img src={i.image} alt="" className="card-img-top" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
