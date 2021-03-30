import { AppendTalk } from "../TalkingComponents/appendTalk"
import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './certificates.css'
import { certificates } from '../Shared/ArraysandObjects/SkillsObject';
export const Certificates = () => {
    React.useEffect(() => {
        Aos.init({});
    }, [])
    return (
        <div className="mt-5 mb-5">
            <div className="row justify-content-center">
                <p className="textXL text-white" data-aos='fade-right'>
                    Certifications
                </p>
            </div>
            <div className="row mt-5 mb-5 justify-content-center" >
                {certificates.map((i, index) => {
                    return (
                        <div className="col-sm-6 p-5" key={index}>
                            <div className="card cerf cerCard">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col mt-auto mb-auto" data-aos='fade-right'>
                                            <div className="card noBo">
                                                <img src={i.image} alt="" className="card-img-top" />
                                            </div>

                                        </div>
                                        <div className="col mt-auto mb-auto" data-aos='fade-up'>
                                            <p className="h6 text-center text-white">{i.org}</p>
                                            <p className="text-center text-white">
                                                <i class={i.image2}></i>
                                            </p>
                                            <p className="text-center text-white">{i.cer}</p>
                                        </div>
                                        <div className="col m-auto" data-aos='flip-left'>
                                            <button className="btn btn-success btn-sm button"
                                                onClick={() => {
                                                    window.open(i.url)
                                                }}>View Certificate</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )

}