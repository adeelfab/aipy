// components/ChatBot.js
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ChatBot = ({ selectedLanguage, languages }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage = { type: 'user', content: currentMessage };
    setChatHistory(prev => [...prev, userMessage]);

    // Simulate AI response based on language
    setTimeout(() => {
      let aiResponse = "";
      if (selectedLanguage === 'es') {
        if (currentMessage.toLowerCase().includes('hello') || currentMessage.toLowerCase().includes('hola')) {
          aiResponse = "¡Hola! I'm your Spanish tutor. Let's practice! Try saying 'Buenos días' (Good morning).";
        } else if (currentMessage.toLowerCase().includes('help')) {
          aiResponse = "I'm here to help! Ask me about Spanish grammar, vocabulary, or try starting a conversation with me in Spanish.";
        } else {
          aiResponse = "Great question! Let me explain that in Spanish context. Would you like to practice some phrases related to this topic?";
        }
      } else {
        aiResponse = `Great! I'm your ${languages.find(l => l.code === selectedLanguage)?.name} tutor. Let's start learning together!`;
      }
      
      const botMessage = { type: 'bot', content: aiResponse };
      setChatHistory(prev => [...prev, botMessage]);
    }, 1000);

    setCurrentMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Tutor Chat</h2>
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="h-64 overflow-y-auto p-4 space-y-3">
          {chatHistory.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              <MessageCircle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p>Start a conversation with your AI tutor!</p>
            </div>
          ) : (
            chatHistory.map((msg, idx) => (
              <div key={idx} className={`p-3 rounded-lg ${msg.type === 'user' ? 'bg-blue-100 ml-8' : 'bg-gray-100 mr-8'}`}>
                <p className="text-sm">{msg.content}</p>
              </div>
            ))
          )}
        </div>
        
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask your tutor anything..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;