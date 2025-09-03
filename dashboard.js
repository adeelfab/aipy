// components/Dashboard.js
import React from 'react';
import { User, Trophy, Star, Play } from 'lucide-react';
import ChatBot from './ChatBot';

const Dashboard = ({ 
  user, 
  selectedLanguage, 
  languages, 
  lessons, 
  userProgress, 
  onStartLesson 
}) => {
  const selectedLang = languages.find(l => l.code === selectedLanguage);
  const availableLessons = lessons[selectedLanguage] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-800">LinguaAI</h1>
              <span className="text-lg">{selectedLang?.flag} {selectedLang?.name}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">{userProgress.xp} XP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">Level {userProgress.level}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-600" />
                <span>{user?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lessons */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Lessons</h2>
            <div className="space-y-4">
              {availableLessons.map(lesson => (
                <div key={lesson.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{lesson.title}</h3>
                      <p className="text-gray-600 mt-1">{lesson.content}</p>
                    </div>
                    <button
                      onClick={() => onStartLesson(lesson)}
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Start</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Chat */}
          <div className="lg:col-span-1">
            <ChatBot selectedLanguage={selectedLanguage} languages={languages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;