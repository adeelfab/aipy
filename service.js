// services/aiService.js
// AI service for handling OpenAI API calls

const AI_API_BASE_URL = 'https://api.openai.com/v1';

class AIService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async generateLesson(language, topic, level = 'beginner') {
    const prompt = `Create a ${level} level ${language} lesson about ${topic}. 
    Include:
    - 5-7 vocabulary words with translations and pronunciations
    - 2-3 practice exercises (multiple choice and fill-in-the-blank)
    - Simple explanations
    Format as JSON with vocabulary array and exercises array.`;

    try {
      const response = await fetch(`${AI_API_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are a language learning tutor. Create structured lessons in JSON format.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 1500,
          temperature: 0.7
        })
      });

      const data = await response.json();
      return JSON.parse(data.choices[0].message.content);
    } catch (error) {
      console.error('Error generating lesson:', error);
      throw error;
    }
  }

  async getChatResponse(message, language, context = []) {
    const systemPrompt = `You are a friendly ${language} language tutor. 
    Help the user learn ${language} through conversation. 
    Correct their mistakes gently and provide encouragement.
    Keep responses concise and educational.`;

    try {
      const response = await fetch(`${AI_API_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            ...context,
            { role: 'user', content: message }
          ],
          max_tokens: 300,
          temperature: 0.8
        })
      });

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error getting chat response:', error);
      throw error;
    }
  }

  async checkPronunciation(text, language) {
    // This would integrate with speech recognition API
    // For now, return a mock response
    return {
      accuracy: Math.random() * 100,
      feedback: "Good pronunciation! Try to emphasize the vowel sounds more.",
      corrections: []
    };
  }

  async translateText(text, fromLanguage, toLanguage) {
    const prompt = `Translate this ${fromLanguage} text to ${toLanguage}: "${text}"
    Provide only the translation, no explanation.`;

    try {
      const response = await fetch(`${AI_API_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 100,
          temperature: 0.3
        })
      });

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error translating text:', error);
      throw error;
    }
  }
}

// Mock AI service for development/demo
export class MockAIService {
  async generateLesson(language, topic, level = 'beginner') {
    // Return mock lesson data
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    
    return {
      title: `${topic} - ${level}`,
      content: `Learn about ${topic} in ${language}`,
      vocabulary: [
        { word: "example", translation: "ejemplo", pronunciation: "eh-HEM-ploh" }
      ],
      exercises: [
        {
          type: "multiple_choice",
          question: `What does "example" mean in ${language}?`,
          options: ["ejemplo", "casa", "perro", "agua"],
          correct: 0
        }
      ]
    };
  }

  async getChatResponse(message, language) {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const responses = [
      `Great question about ${language}! Let me help you with that.`,
      `That's a good way to practice ${language}. Keep it up!`,
      `I notice you're learning ${language}. Would you like to practice some phrases?`,
      `Excellent! Your ${language} is improving. Try using that in a sentence.`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }

  async checkPronunciation(text, language) {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      accuracy: 75 + Math.random() * 20,
      feedback: "Good effort! Try to roll your R's more.",
      corrections: []
    };
  }

  async translateText(text, fromLanguage, toLanguage) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return `[Translation of "${text}" from ${fromLanguage} to ${toLanguage}]`;
  }
}

export default AIService;