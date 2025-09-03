// components/LanguageSelectScreen.js
import React from 'react';

const LanguageSelectScreen = ({ languages, onLanguageSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Language</h1>
          <p className="text-green-100">Which language would you like to learn?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => onLanguageSelect(lang.code)}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200"
            >
              <div className="text-4xl mb-2">{lang.flag}</div>
              <h3 className="text-xl font-semibold text-gray-800">{lang.name}</h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectScreen;