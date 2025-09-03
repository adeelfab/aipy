# LinguaAI - AI-Powered Language Learning App

A modern, interactive language learning application built with React and designed for AI integration.

## 🚀 Features

### ✅ MVP Features (Phase 1)
- **User Authentication**: Login/Signup with form validation
- **Language Selection**: Choose from Spanish, French, German, Italian, Portuguese
- **Interactive Lessons**: Structured lessons with vocabulary and exercises
- **AI Chatbot**: Simulated AI tutor for conversational practice
- **Progress Tracking**: XP system, levels, and achievement tracking
- **Responsive Design**: Works on desktop and mobile devices

### 🔮 Planned Features (Phase 2)
- **Voice Integration**: Speech-to-text and text-to-speech
- **Real AI Integration**: OpenAI GPT-4 integration
- **Backend API**: FastAPI backend with PostgreSQL
- **Advanced Exercises**: Roleplay scenarios, spaced repetition
- **Social Features**: Friend system, leaderboards
- **Offline Mode**: PWA capabilities

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with Hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Scripts** - Create React App tooling

### Planned Backend
- **FastAPI** (Python) - High-performance API framework
- **PostgreSQL** - Robust relational database
- **OpenAI API** - GPT-4 for AI tutoring
- **Whisper API** - Speech recognition
- **Firebase Auth** - Authentication service

## 📁 Project Structure

```
linguaai-app/
├── public/
├── src/
│   ├── components/
│   │   ├── LoginScreen.js
│   │   ├── SignupScreen.js
│   │   ├── LanguageSelectScreen.js
│   │   ├── Dashboard.js
│   │   ├── ChatBot.js
│   │   ├── LessonScreen.js
│   │   ├── VocabularySection.js
│   │   └── ExerciseSection.js
│   ├── data/
│   │   └── content.js          # Languages and lessons data
│   ├── hooks/
│   │   └── useLocalStorage.js  # Custom hooks
│   ├── services/
│   │   └── aiService.js        # AI API integration
│   ├── utils/
│   │   ├── auth.js            # Authentication utilities
│   │   └── progress.js        # Progress tracking utilities
│   ├── App.js                 # Main app component
│   ├── App.css               # Styles
│   └── index.js              # App entry point
├── package.json
└── README.md
```


## 📖 Usage

### Demo Credentials
- **Email**: demo@linguaai.com
- **Password**: demo123

### Available Languages
- 🇪🇸 **Spanish** - 3 complete lessons
- 🇫🇷 **French** - 1 lesson
- 🇩🇪 **German** - 1 lesson
- 🇮🇹 **Italian** - 1 lesson
- 🇵🇹 **Portuguese** - 1 lesson

### Current Lessons (Spanish)
1. **Basic Greetings** - Hola, Buenos días, etc.
2. **Numbers 1-10** - uno, dos, tres, etc.
3. **Family Members** - padre, madre, hermano, etc.

## 🏗️ Architecture

### Component Structure
- **App.js** - Main application logic and routing
- **Screen Components** - Full-page components (Login, Dashboard, etc.)
- **Feature Components** - Reusable components (ChatBot, Exercises, etc.)
- **Utility Functions** - Helper functions for auth, progress, etc.

### State Management
- React useState hooks for component state
- Props drilling for shared state (can be upgraded to Context API)
- In-memory storage (localStorage ready for production)

### Data Flow
```
User Interaction → Component State → Utility Functions → UI Update
```

## 🎯 API Integration Plan

### Phase 2: Backend Integration

**FastAPI Backend Structure:**
```python
# main.py
from fastapi import FastAPI
from routers import auth, lessons, chat, progress

app = FastAPI()
app.include_router(auth.router)
app.include_router(lessons.router)
app.include_router(chat.router)
app.include_router(progress.router)
```

**Key Endpoints:**
- `POST /auth/login` - User authentication
- `GET /lessons/{language}` - Get lessons for language
- `POST /chat/message` - Send message to AI tutor
- `PUT /progress/xp` - Update user progress
- `POST /speech/recognize` - Speech-to-text
- `POST /speech/synthesize` - Text-to-speech

## 🧪 Testing

```bash
# Run tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test -- LoginScreen.test.js
```

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
npm run build
# Deploy build folder to your hosting service
```

### Full Stack Deployment
1. Deploy backend to Railway/Render/AWS
2. Deploy frontend to Vercel/Netlify
3. Configure environment variables
4. Set up database (PostgreSQL)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📈 Roadmap

### Phase 1 ✅ (Current)
- [x] User authentication
- [x] Language selection
- [x] Basic lessons with exercises
- [x] Progress tracking
- [x] AI chat simulation

### Phase 2 🚧 (Next)
- [ ] Real AI integration (OpenAI GPT-4)
- [ ] Voice features (speech recognition/synthesis)
- [ ] Backend API development
- [ ] Database integration
- [ ] Advanced exercise types

### Phase 3 🔮 (Future)
- [ ] Social features
- [ ] Advanced AI tutoring
- [ ] Mobile app (React Native)
- [ ] Offline capabilities
- [ ] Premium features

## 🐛 Known Issues

- localStorage not available in Claude.ai artifacts (use in own environment)
- AI responses are currently simulated (integrate OpenAI API for production)
- Limited content (easily expandable with more lessons)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for AI capabilities
- React team for the amazing framework
- Tailwind CSS for beautiful styling
- Lucide for clean icons

## 📞 Support

- Create an issue on GitHub
- Email: support@linguaai.com
- Discord: LinguaAI Community

---

**Built with ❤️ for language learners worldwide**