import React from "react";
import { ProjectNavbar } from "./ProjectsComponents/projectNavbar";
import { ProjectContent } from "./ProjectsComponents/projectContent";
import * as projectsMode from "./Shared/ProjectsArrays";
export const Projects = (props) => {
  return (
    <div className="" id="Projects">
      <div
        className=""
        data-aos="zoom-in-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <ProjectNavbar data-aos="flip-left" />
        <div id="react"></div>
        <ProjectContent arr={projectsMode.fullStack} />
        <hr className="aboutHr" data-aos="fade-up" />
        <div id="js">
          <ProjectContent arr={projectsMode.vanillaJS} />
          <hr className="aboutHr" data-aos="fade-up" />
        </div>
        <div id="app">
          <ProjectContent arr={projectsMode.appClones} />
          <hr className="aboutHr" data-aos="fade-up" />
        </div>
        <div id="api">
          <ProjectContent arr={projectsMode.API} />
        </div>
      </div>
    </div>
  );
};
