export interface PersonalInfo {
  name: string;
  title: string;
  avatar: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Ayush Ranjan",
  title: "Backend Developer and AI Engineer",
  avatar: "https://media.licdn.com/dms/image/v2/D5603AQHaRuXwGLxEIA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698045738783?e=1762992000&v=beta&t=8E6AOdA8xQut-9ZGDrF7LgHAWLt8LP1eZoSSaFI3dwA",
  socialLinks: {
    github: "https://github.com/ayushbayek",
    linkedin: "https://www.linkedin.com/in/ayush-ranjan-0ba802193/"
  }
};
