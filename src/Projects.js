import React from 'react';
import { ProjectNavbar } from './ProjectsComponents/projectNavbar';
import { ProjectContent } from './ProjectsComponents/projectContent';
import * as projectsMode from './Shared/ProjectsArrays'
import { Main } from './ContactCompoents/Main';
export const Projects = (props) => {
    let p = props.match.params.project
    const [projects, SetProjects] = React.useState(projectsMode.fullStack);
    React.useEffect(() => {
        if (p !== undefined && projectsMode[p] !== undefined) {
            SetProjects(projectsMode[p])
        }
    }, [p])
    return (
        <div className="" >
            <div className="" data-aos="zoom-in-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500">

                <ProjectNavbar active={p} data-aos="flip-left" />
                <ProjectContent arr={projects} />
            </div>
        </div>
    )
}
