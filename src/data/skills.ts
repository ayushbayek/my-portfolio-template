export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "full-stack",
    title: "Full Stack Web Development",
    description: "I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.",
    icon: "faReact",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Autogen",
      "MCP",
      "OpenAI SDK",
      "SQL",
      "PostgreSQL",
      "Postman"
    ]
  },
  {
    id: "genai",
    title: "GenAI & LLM",
    description: "Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.",
    icon: "faPython",
    technologies: [
      "OpenAI",
      "Groq",
      "LangChain",
      "Qdrant",
      "Hugging Face",
      "LlamaIndex",
      "Streamlit"
    ]
  }
];
