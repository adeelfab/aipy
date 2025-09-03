// components/VocabularySection.js
import React from 'react';

const VocabularySection = ({ vocabulary }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Vocabulary</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vocabulary.map((item, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-4">
            <div className="text-xl font-semibold text-blue-600">{item.word}</div>
            <div className="text-gray-800">{item.translation}</div>
            <div className="text-sm text-gray-500">[{item.pronunciation}]</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularySection;