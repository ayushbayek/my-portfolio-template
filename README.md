# Ayush Kumar - Portfolio Website 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)

## Live Portfolio

🌐 **View my live portfolio:** [https://ayushbayek.github.io/my-portfolio-template](https://ayushbayek.github.io/my-portfolio-template)

## About This Portfolio

This is my personal portfolio website built with React, TypeScript, and SCSS. It showcases my projects, skills, experience, and includes an interactive AI-powered chat feature.

### Key Features

✅ **Interactive AI Chat** - Powered by custom FastAPI backend  
✅ **Responsive Design** - Optimized for all devices  
✅ **Dark/Light Mode** - Automatic theme switching  
✅ **Modern Tech Stack** - React, TypeScript, SCSS  
✅ **Contact Form** - Integrated with EmailJS  
✅ **Deployed** - Hosted on GitHub Pages

## AI Chat Feature

The portfolio includes an interactive AI assistant powered by my custom FastAPI backend deployed on Render:

- **Backend API:** `https://virtu-you.onrender.com`
- **Real-time responses** with typing simulation
- **Context-aware conversations** about my work and skills
- **Quick reply buttons** for common questions

## Project Structure

```
src/
├── components/          # React components
│   ├── Chat.tsx        # AI chat interface
│   ├── Contact.tsx     # Contact form
│   ├── Expertise.tsx   # Skills section
│   ├── Project.tsx     # Projects showcase
│   └── Timeline.tsx    # Experience timeline
├── assets/
│   ├── images/         # Project screenshots & assets
│   └── styles/         # SCSS stylesheets
├── data/               # Static data (projects, skills, etc.)
├── config/             # Configuration files
└── utils/              # Utility functions
```

## Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ayushbayek/my-portfolio-template.git
   cd my-portfolio-template
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm start
   ```

   Opens [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

This portfolio is deployed using GitHub Pages:

1. **Configure package.json:**

   ```json
   {
     "homepage": "https://ayushbayek.github.io/my-portfolio-template"
   }
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

## Backend Integration

The chat feature connects to my FastAPI backend:

- **API Endpoint:** `https://virtu-you.onrender.com/api/v1/chat/message`
- **Technology:** Python, FastAPI, OpenAI integration
- **Features:** Message history, context management, AI responses

## Customization

To customize this portfolio for your own use:

1. Update personal information in `/src/data/`
2. Replace project images in `/src/assets/images/`
3. Modify styles in `/src/assets/styles/`
4. Update contact form configuration in `/src/config/emailConfig.ts`

## Technologies Used

- **Frontend:** React, TypeScript, SCSS, Material-UI
- **Backend:** FastAPI, Python, OpenAI API
- **Deployment:** GitHub Pages, Render
- **Email Service:** EmailJS
- **Version Control:** Git, GitHub

## Contact

- **Portfolio:** [https://ayushbayek.github.io/my-portfolio-template](https://ayushbayek.github.io/my-portfolio-template)
- **GitHub:** [https://github.com/ayushbayek](https://github.com/ayushbayek)
- **Email:** Available through the contact form on the portfolio

---

⭐ **If you find this portfolio helpful, please give it a star!**
