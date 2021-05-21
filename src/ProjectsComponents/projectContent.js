import React from "react";
import "./content.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const ProjectContent = (props) => {
  React.useEffect(() => {
    Aos.init({});
  }, [props.arr]);
  console.log(props.arr);
  return (
    <div className="" style={props.loader ? { opacity: "0.1" } : null}>
      <div className="row justify-content-center m-3">
        {props.arr.map((i, index) => {
          let flag = true;
          const arr = i.technologies.filter((a) => a.includes("angular"));
          if (arr.length) {
            flag = false;
          }
          return (
            <>
              <div
                className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-2 p-5"
                data-aos="flip-left"
                key={index}
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
              >
                <div className="card trans p-1">
                  <img src={i.image} alt="" className="card-img-top pImage" />
                  <div className="card-text">
                    <p className="text-center text-white h5 mt-2">{i.name}</p>
                    <div
                      className=""
                      data-aos="zoom-in-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="1800"
                    >
                      {/* <div className="row" data-aos="zoom-in-right"
                                                data-aos-easing="ease-out-cubic"
                                                data-aos-duration="1800">
                                                <div className="col-sm-12">

                                                    <p className="text-white text-center p-3">{i.description.split('').slice(0, 80).join('') + ' ...'}</p>
                                                </div>
                                            </div> */}
                      <hr className="aboutHr" />
                      <div className="row p-3 justify-content-center">
                        {flag ? (
                          <div className="col-6 text-center">
                            <button
                              className="btn btn-dark button btn-sm bc"
                              onClick={() => {
                                window.open(i.url);
                              }}
                            >
                              View App
                            </button>
                          </div>
                        ) : null}
                        <div className="col-6 text-center">
                          <button
                            className="btn btn-outline-dark bc btn-light button btn-sm"
                            onClick={() => {
                              window.open(i.gitHubLink);
                            }}
                          >
                            View Code
                          </button>
                        </div>
                      </div>
                      <hr className="aboutHr" />
                      <p className="text-center text-white h5 mb-3">
                        Technologies:
                      </p>
                      <div className="row justify-content-center pr-5 pl-5">
                        {i.technologies.map((a, b) => {
                          return (
                            <div className="col m-auto" key={b + "op"}>
                              <p className="text-white text-center">
                                <span className={a}></span>
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
