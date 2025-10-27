import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { personalInfo } from '../data/personalInfo';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">{personalInfo.name}</a> with 💜</p>
    </footer>
  );
}

export default Footer;