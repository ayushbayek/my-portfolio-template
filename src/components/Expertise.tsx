import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import { skillCategories } from '../data/skills';
import '../assets/styles/Expertise.scss';

// Icon mapping for dynamic icon rendering
const iconMap: { [key: string]: any } = {
  faReact,
  faDocker,
  faPython
};

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {skillCategories.map((skill) => (
                    <div key={skill.id} className="skill">
                        <div className="skill-icon">
                            <FontAwesomeIcon icon={iconMap[skill.icon]} />
                        </div>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {skill.technologies.map((tech, index) => (
                                <Chip key={index} className='chip' label={tech} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;