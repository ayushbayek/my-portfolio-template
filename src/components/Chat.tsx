import React, { useState, useRef } from "react";
import "../assets/styles/Chat.scss";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // No auto-scroll - user maintains scroll position

  const simulateTyping = async (text: string): Promise<void> => {
    const words = text.split(" ");
    let currentText = "";

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      currentText += (i === 0 ? "" : " ") + word;
      const finalCurrentText = currentText;

      setMessages((prev) => {
        const newMessages = [...prev];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage && !lastMessage.isUser) {
          newMessages[newMessages.length - 1] = {
            ...lastMessage,
            text: finalCurrentText + (i < words.length - 1 ? "..." : ""),
          };
        }
        return newMessages;
      });

      await new Promise((resolve) =>
        setTimeout(resolve, 50 + Math.random() * 100)
      );
    }
  };

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);
    setError(null);

    try {
      // Add a placeholder message for the bot response
      const botMessagePlaceholder: Message = {
        id: (Date.now() + 1).toString(),
        text: "",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessagePlaceholder]);

      // Replace this with your FastAPI endpoint
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputText,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Simulate typing effect for the response
      await simulateTyping(
        data.message || "I'm not sure how to respond to that."
      );
    } catch (err) {
      console.error("Error calling FastAPI:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(`Failed to get response from chatbot: ${errorMessage}`);

      const errorMessageObj: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble responding right now. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessageObj]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        text: "Hello! I'm your AI assistant. How can I help you today?",
        isUser: false,
        timestamp: new Date(),
      },
    ]);
    setError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    // Auto-resize textarea
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
  };

  const quickReplies = [
    "Tell me about yourself",
    "What are your skills?",
    "Show me your projects",
    "How can I contact you?",
  ];

  return (
    <div className='chat-section' id='chat'>
      <div className='chat-container'>
        <div className='section-heading'>
          <h1>Chat with Me</h1>
          <p>Interact with my AI assistant to learn more about my work</p>
        </div>
        <div className='chat-header'>
          <div className='chat-avatar'>
            <div className='avatar-pulse'></div>
            <div className='avatar-icon'>🤖</div>
          </div>
          <div className='chat-info'>
            <h2>Virtu-You AI</h2>
            <p>Your personal AI assistant</p>
            {isLoading && (
              <div className='typing-indicator'>AI is typing...</div>
            )}
          </div>
          <button className='clear-btn' onClick={clearChat} title='Clear chat'>
            <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
            </svg>
          </button>
        </div>

        <div className='messages-container'>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${
                message.isUser ? "user-message" : "bot-message"
              } ${message.text === "" ? "typing-placeholder" : ""}`}
            >
              {!message.isUser && <div className='message-avatar'>🤖</div>}
              <div className='message-bubble'>
                {message.text || (
                  <div className='typing-dots'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                <div className='message-time'>
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
              {message.isUser && <div className='message-avatar'>👤</div>}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {messages.length <= 2 && (
          <div className='quick-replies'>
            <p>Quick questions:</p>
            <div className='quick-reply-buttons'>
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className='quick-reply-btn'
                  onClick={() => setInputText(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className='input-container'>
          <div className='input-wrapper'>
            <textarea
              ref={inputRef}
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder='Type your message...'
              disabled={isLoading}
              rows={1}
              className='chat-input'
            />
            <button
              onClick={sendMessage}
              disabled={!inputText.trim() || isLoading}
              className='send-btn'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' />
              </svg>
            </button>
          </div>
        </div>

        {error && (
          <div className='error-message'>
            <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' />
            </svg>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
