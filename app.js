// App.js
import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import LanguageSelectScreen from './components/LanguageSelectScreen';
import Dashboard from './components/Dashboard';
import LessonScreen from './components/LessonScreen';
import { languages, lessons } from './data/content';
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('login');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [userProgress, setUserProgress] = useState({ xp: 0, level: 1, streak: 0 });
  const [currentLesson, setCurrentLesson] = useState(null);

  // Authentication functions
  const handleLogin = (email, password) => {
    if (email && password) {
      const user = { email, name: email.split('@')[0] };
      setCurrentUser(user);
      setCurrentScreen('language-select');
    }
  };

  const handleSignup = (email, password, name) => {
    if (email && password && name) {
      const user = { email, name };
      setCurrentUser(user);
      setCurrentScreen('language-select');
    }
  };

  // Navigation functions
  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
    setCurrentScreen('dashboard');
  };

  const startLesson = (lesson) => {
    setCurrentLesson(lesson);
    setCurrentScreen('lesson');
  };

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  const addXP = (amount) => {
    setUserProgress(prev => ({ 
      ...prev, 
      xp: prev.xp + amount,
      level: Math.floor((prev.xp + amount) / 100) + 1
    }));
  };

  // Screen routing
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} onNavigateToSignup={() => navigateTo('signup')} />;
      
      case 'signup':
        return <SignupScreen onSignup={handleSignup} onNavigateToLogin={() => navigateTo('login')} />;
      
      case 'language-select':
        return <LanguageSelectScreen languages={languages} onLanguageSelect={handleLanguageSelect} />;
      
      case 'dashboard':
        return (
          <Dashboard 
            user={currentUser}
            selectedLanguage={selectedLanguage}
            languages={languages}
            lessons={lessons}
            userProgress={userProgress}
            onStartLesson={startLesson}
          />
        );
      
      case 'lesson':
        return (
          <LessonScreen 
            lesson={currentLesson}
            userProgress={userProgress}
            onAddXP={addXP}
            onNavigateBack={() => navigateTo('dashboard')}
          />
        );
      
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <div className="App">
      {renderCurrentScreen()}
    </div>
  );
};

export default App;