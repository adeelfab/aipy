// components/LoginScreen.js
import React from 'react';

const LoginScreen = ({ onLogin, onNavigateToSignup }) => {
  const handleSubmit = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">LinguaAI</h1>
          <p className="text-gray-600">Learn languages with AI</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              id="email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              id="password"
            />
          </div>
          
          <button 
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
          
          <div className="text-center">
            <span className="text-sm text-gray-600">Don't have an account? </span>
            <button 
              onClick={onNavigateToSignup}
              className="text-sm text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;