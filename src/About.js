import { Certificates } from "./AboutComponents/Certificates"
import { Education } from "./AboutComponents/Education"
import { Experience } from "./AboutComponents/Experience"
import { Profile } from "./AboutComponents/Profile"
import { Technologies } from "./AboutComponents/Technologies"
import './about.css'
import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
export const About = () => {
    React.useEffect(() => {
        Aos.init({});
    }, []);
    const downloadFile = () => {
        window.open('https://drive.google.com/file/d/1NG2yYUXjQwe6-WJ0Xblw3N-77G0gcXgu/view?usp=sharing')
    }
    return (
        <>
            {/* <Main /> */}
            <button className="btn sticky-top shd float-right btn-lg bttn button cur text-white" data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                onClick={downloadFile}>
                <span className='btnspn'>Download Resume</span>
                <i class="fa fa-download dicon"></i></button>
            <div className="container">
                <Profile />
                <hr className='aboutHr' data-aos='fade-up' />
                <Experience />
                <hr className='aboutHr' data-aos='fade-up' />
                <Education />
                <hr className='aboutHr' data-aos='fade-up' />
                <Technologies />
                <hr className='aboutHr' data-aos='fade-up' />
                <Certificates />
            </div>
        </>
    )
}