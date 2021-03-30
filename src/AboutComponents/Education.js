import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export const Education = () => {
    React.useEffect(() => {
        Aos.init({});
    }, [])
    return (
        <div className="mt-5 mb-5">
            <div className="row justify-content-center">
                <p className="textXL text-white" data-aos='fade-right'>
                    Education
                </p>
            </div>
            <div className="row mt-5">
                <div className="col-5 text-white text-right" data-aos='fade-right'>
                    <p className="text">J.B. Institute of Engineering and Technology</p>
                </div>
                <div className="col-2 text-white text-center">
                    <p className="">|</p></div>
                <div className="col-5 text-white text-left" data-aos='fade-left'>
                    <p className="text">Bachelor of Technology (2014-18)</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-5 text-white text-right" data-aos='fade-right'>
                    <p className="text">Narayana Junior College</p>
                </div>
                <div className="col-2 text-white text-center">
                    <p className="">|</p></div>
                <div className="col-5 text-white text-left" data-aos='fade-left'>
                    <p className="text">Intermediate (2012-14)</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-5 text-white text-right" data-aos='fade-right'>
                    <p className="text">Cambridge High School</p>
                </div>
                <div className="col-2 text-white text-center">
                    <p className="">|</p></div>
                <div className="col-5 text-white text-left" data-aos='fade-left'>
                    <p className="text">Schooling (2012)</p>
                </div>
            </div>
        </div>
    )
}