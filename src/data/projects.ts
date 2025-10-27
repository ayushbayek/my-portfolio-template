export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  order: number;
}

export const projects: Project[] = [
  {
    id: "filmate-ai",
    title: "Filmate AI",
    description: "Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.",
    image: "mock10",
    link: "https://www.filmate.club/",
    order: 1
  },
  {
    id: "high-speed-chase",
    title: "High Speed Chase",
    description: "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.",
    image: "mock09",
    link: "https://yujisatojr.itch.io/highspeedchase",
    order: 2
  },
  {
    id: "astro-raiders",
    title: "Astro Raiders",
    description: "Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.",
    image: "mock08",
    link: "https://yujisatojr.itch.io/spacecraft",
    order: 3
  },
  {
    id: "datum-learning",
    title: "Datum: Integrated Learning Platform",
    description: "This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.",
    image: "mock07",
    link: "https://www.datumlearn.com/",
    order: 4
  },
  {
    id: "wemanage",
    title: "WeManage: Real Estate Asset Management",
    description: "This mobile application allows realtors in Japan to securely manage their property information and view future income predictions. This app is built with Ruby on Rails and JavaScript.",
    image: "mock06",
    link: "http://www.wemanage.jp/",
    order: 5
  },
  {
    id: "covid-management",
    title: "COVID-19 Case Management",
    description: "Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.",
    image: "mock05",
    link: "https://www.byuh.edu/covid-19-case-management",
    order: 6
  },
  {
    id: "multi-reg-analysis",
    title: "Multiple Regression Property Analysis",
    description: "Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.",
    image: "mock04",
    link: "https://github.com/yujisatojr/multi-reg-analysis",
    order: 7
  },
  {
    id: "programs-of-study",
    title: "Programs of Study",
    description: "Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.",
    image: "mock03",
    link: "https://holokai.byuh.edu/programs-of-study",
    order: 8
  },
  {
    id: "transfer-evaluation",
    title: "Transfer Evaluation Matrix",
    description: "Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.",
    image: "mock02",
    link: "https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix",
    order: 9
  },
  {
    id: "submeowrine",
    title: "Submeowrine",
    description: "Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.",
    image: "mock01",
    link: "https://github.com/yujisatojr/submeowrine",
    order: 10
  }
];
