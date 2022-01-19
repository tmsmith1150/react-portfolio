import React from "react";
import ProjectCard from "../../ProjectCard";
import projects from '../../Info/projects.js';
import './style.css';

class Projects extends React.Component {

    state = {
        projects
    };
    

    render() {
        return (
            <div className="m-3 projects">
           
                {/* <h1 className="display-4 text-center pb-5 brand">Projects</h1> */}
                <h1 className="lead-2 text-center brand animate__animated animate__fadeInDown animate__delay-1s">Featured Work</h1>
                <hr className="my-4" />
                    {this.state.projects.map(project => (
                        <ProjectCard
                            projectName={project.projectName}
                            exampleGif={project.exampleGif}
                            summary={project.summary}
                            techUsed={project.techUsed}
                            githubLink={project.githubLink}
                            deployedLink={project.deployedLink}
                        />
                    ))}
            
            </div>
        )
    }
}

export default Projects;