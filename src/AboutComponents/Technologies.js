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
    <div className="mt-5 mb-5">
      <div className="row justify-content-center">
        <p className="textXL text-white" data-aos="fade-left">
          Tools and Technologies worked with
        </p>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-12">
          <div className="card cerCard noBo" data-aos="zoom-in">
            <div className="card-body m-3">
              <div className="row justify-content-center">
                {skillsObj.map((i, index) => {
                  return (
                    <div className="col-2 text-center" key={index}>
                      <div className="card noBo">
                        <img src={i.image} alt="" className="card-img-top" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
