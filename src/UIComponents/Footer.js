import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export const Footer = () => {
    React.useEffect(() => {
        Aos.init({});
    }, [])
    return (
        <div className="black shd">
            <div className="row justify-content-center p-5">
                <div className="col-md-6 col-lg-3 text-center">
                    <p className="h6 text-white">
                        Address
                        </p>
                    <p className="text-white text-center mt-5 p-5">
                        Saidabad Colony,
                        Hyderabad-500 059, Telangana, India
                    </p>
                </div>
                <div className="col-md-6 col-lg-3 text-center">
                    <p className="h6 text-white">
                        Contact
                        </p>
                    <p className="text-white text-center mt-5 pt-5"><i class="fas fa-phone-alt"></i> +917702974996</p>
                    <p className="text-white text-center mt-5"> <i class="fab fa-skype"></i> live:muntha.pavan</p>
                    <p className="text-white text-center mt-5 mb-5 pb-5"> <i class="fas fa-envelope"></i> muntha.pavan@gmail.com</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center">
                    <p className="h6 text-white">
                        External Links
                        </p>
                    <p className="text-white text-center link mt-5 pt-5" onClick={() => {
                        window.open('https://github.com/pavankumrkrn')
                    }}><i class="fab fa-github"></i> GitHub</p>
                    <p className="text-white text-center link mt-3" onClick={() => {
                        window.open('https://www.linkedin.com/in/pavan-kumar-krn/')
                    }}><i class="fab fa-linkedin"></i> Linked In</p>
                    {/* <p className="text-white text-center link mt-3"><i class="fab fa-stack-overflow"></i> StackOverFlow</p> */}
                    <p className="text-white text-center link mt-3" onClick={() => {
                        window.open('https://muntha-pavan.medium.com/')
                    }}>Medium</p>
                    {/* <p className="text-white text-center link mt-3 mb-5 pb-5" onClick={() => {
                        window.open('https://app.netlify.com/teams/muntha-pavan/overview')
                    }}>Netlify</p> */}
                </div>
                <div className="col-md-6 col-lg-3 text-center">
                    <p className="h6 text-white">
                        Social Profiles
                        </p>
                    <p className="text-white text-center link mt-5 pt-5" onClick={() => {
                        window.open('https://www.facebook.com/muntha.pavankumar')
                    }}><i class="fab fa-facebook-square"></i> Facebook</p>
                    <p className="text-white text-center link mt-3" onClick={() => {
                        window.open('https://www.instagram.com/pavan_kumar4996/')
                    }}><i class="fab fa-instagram"></i> Instagram</p>
                </div>
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col">
                    <p className="text-center text-white">This Portfolio is made using React JS</p>
                    <p className="text-center text-white"><i class="fal fa-copyright"></i><i> All rights reserved for this template and website 2021</i></p>
                </div>
            </div>
        </div>
    )
}