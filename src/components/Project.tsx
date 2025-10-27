import React from "react";
import { projects } from '../data/projects';
import '../assets/styles/Project.scss';

// Import all mock images
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

// Create a mapping object for images
const imageMap: { [key: string]: string } = {
  mock01,
  mock02,
  mock03,
  mock04,
  mock05,
  mock06,
  mock07,
  mock08,
  mock09,
  mock10
};

function Project() {
    // Sort projects by order
    const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {sortedProjects.map((project) => (
                <div key={project.id} className="project">
                    <a href={project.link} target="_blank" rel="noreferrer">
                        <img 
                            src={imageMap[project.image]} 
                            className="zoom" 
                            alt="thumbnail" 
                            width="100%"
                        />
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer">
                        <h2>{project.title}</h2>
                    </a>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;