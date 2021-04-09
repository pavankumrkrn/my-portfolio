import Aos from "aos";
import React from "react";
import profile from "../Shared/Images/portfolio-Convert.jpg";
import "./certificates.css";

export const Profile = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="mt-5">
      <div className="row justify-content-center" data-aos="fade-up">
        <p className="textXL text-white">Profile</p>
      </div>
      <div
        className="row justify-content-center mb-1 mt-3"
        data-aos="fade-right"
      >
        <div className="col-lg-6 col-md-6 col-10">
          <div className="card nBack">
            <img src={profile} alt="" className="card-img-top round" />
          </div>
        </div>
      </div>
      <p className="text-white text p-3" data-aos="fade-left  ">
        A software developer who is enthusiastic in developing applications,
        having expertise in full stack development. Web development is the love
        of my life, I dedicate most of my free time to developing web
        applications as they make me feel like an artist.
      </p>
    </div>
  );
};
