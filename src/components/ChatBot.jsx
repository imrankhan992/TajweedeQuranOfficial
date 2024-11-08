import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", isBot: true }]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;

    // Update user message in the chat
    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    
    // Send the user message to OpenAI
    const userMessage = input;
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo", // or "gpt-4" if you have access
          messages: [{ role: "user", content: userMessage }]
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      const botReply = response.data.choices[0].message.content;
      setMessages((prev) => [...prev, { text: botReply, isBot: true }]);
    } catch (error) {
      console.error("Error fetching response from OpenAI:", error);
      setMessages((prev) => [...prev, { text: "Oops! Something went wrong. Please try again.", isBot: true }]);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 p-4 bg-white shadow-lg rounded-lg w-80">
      <div className="h-60 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 p-2 rounded ${msg.isBot ? 'bg-gray-100' : 'bg-blue-100 text-right'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="flex-grow border border-gray-300 rounded p-2 mr-2"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
