    import React, { useState } from 'react';

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = { role: 'user', text: inputMessage };
    const updatedHistory = [...chatHistory, userMessage];
    setChatHistory(updatedHistory);
    setInputMessage('');
    setIsLoading(true);

    try {
      
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${"your api key"}`;

      const payload = {
        contents: updatedHistory.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      const botText = result?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that. Can you please rephrase?";
      const botMessage = { role: 'model', text: botText };
      setChatHistory(prev => [...prev, botMessage]);
      setMessage(null);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setChatHistory(prev => [...prev, { role: 'model', text: 'Oops! Something went wrong. Please try again.' }]);
      setMessage({ type: 'error', text: 'Failed to get a response from the AI tutor.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">AI Tutor</h2>
      <div className="bg-white rounded-xl shadow-md border border-gray-300 flex flex-col h-[70vh] max-h-[70vh]">
        {message && (
          <div className={`mx-auto max-w-xl p-4 mb-4 rounded-lg text-center font-medium ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}
        {/* Chat history display */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {chatHistory.length === 0 && (
            <div className="text-center text-gray-500 italic py-8">
              Ask me anything about Java, Python, SQL, or any other subject to get started!
            </div>
          )}
          {chatHistory.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 rounded-xl max-w-[80%] ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-gray-100 text-gray-900 rounded-bl-none'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-xl rounded-bl-none text-gray-500 italic">
                Typing...
              </div>
            </div>
          )}
        </div>
        {/* Message input form */}
        <form onSubmit={handleSendMessage} className="flex p-4 border-t border-gray-300">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-r-lg transition-colors hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
