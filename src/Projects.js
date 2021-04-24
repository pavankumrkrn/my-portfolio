import React, { useState } from "react";
import { ProjectNavbar } from "./ProjectsComponents/projectNavbar";
import { ProjectContent } from "./ProjectsComponents/projectContent";
import { projects } from "./Shared/ProjectsArrays";

export const Projects = (props) => {
  const [prjs, setprjs] = useState(projects);
  const [loader, setLoader] = useState(false);
  const changeProjects = (val) => {
    setLoader(!loader);
    setTimeout(() => setLoader(false), 1500);
    if (val === "ALL") {
      setprjs(projects);
    } else {
      setprjs(projects.filter((i) => i.type.includes(val)));
    }
  };

  return (
    <div className="" id="Projects">
      <div
        className=""
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <ProjectNavbar
          data-aos="flip-left"
          changeProjects={changeProjects}
          loader={loader}
        />
        <div id="react"></div>
        <ProjectContent arr={prjs} loader={loader} />
      </div>
    </div>
  );
};
