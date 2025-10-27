// FastAPI Configuration for Chat Integration
// This file provides the configuration for connecting to your FastAPI backend

const FASTAPI_CONFIG = {
  // Base URL for your FastAPI server
  baseUrl: "http://localhost:8000",

  // Endpoint paths
  endpoints: {
    chat: "/chat",
    health: "/health",
  },

  // Request configuration
  requestConfig: {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    timeout: 30000, // 30 seconds
  },

  // Expected response format
  responseFormat: {
    message: "string", // The AI response message
    timestamp: "string", // Response timestamp
    status: "string", // Response status
  },
};

// Example FastAPI backend code (Python)
const FASTAPI_EXAMPLE_CODE = `
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime
import uvicorn

app = FastAPI(title="Virtu-You AI Chat API")

# CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    message: str
    timestamp: str
    status: str = "success"

@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    try:
        # Your AI logic here
        user_message = request.message.lower()
        
        # Example response logic
        if "hello" in user_message or "hi" in user_message:
            response = "Hello! I'm your AI assistant. How can I help you today?"
        elif "skills" in user_message:
            response = "I have expertise in React, TypeScript, FastAPI, and modern web development technologies."
        elif "projects" in user_message:
            response = "I've worked on various projects including portfolio websites, chat applications, and AI integrations."
        elif "contact" in user_message:
            response = "You can reach me through my portfolio website or email me directly."
        else:
            response = f"I received your message: '{request.message}'. How can I assist you further?"
        
        return ChatResponse(
            message=response,
            timestamp=datetime.now().isoformat()
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
`;

// Environment variables for different deployment scenarios
const ENV_CONFIG = {
  development: {
    baseUrl: "http://localhost:8000",
  },
  production: {
    baseUrl: "https://your-fastapi-server.com",
  },
  staging: {
    baseUrl: "https://staging.your-fastapi-server.com",
  },
};

// Helper function to get the appropriate API URL
function getApiUrl() {
  const env = process.env.NODE_ENV || "development";
  return ENV_CONFIG[env]?.baseUrl || FASTAPI_CONFIG.baseUrl;
}

// Export configuration
module.exports = {
  FASTAPI_CONFIG,
  FASTAPI_EXAMPLE_CODE,
  ENV_CONFIG,
  getApiUrl,
};
