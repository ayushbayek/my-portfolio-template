import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { personalInfo } from '../data/personalInfo';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={personalInfo.avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>{personalInfo.name}</h1>
          <p>{personalInfo.title}</p>

          <div className="mobile_social_icons">
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;