import React from 'react';

interface ExpertProps {
  expert: {
    achievements: string[];
  };
}

const Achievements: React.FC<ExpertProps> = ({ expert }) => {
  return (
    <div className="mt-6 bg-yellow-50 rounded-xl p-4">
      <h3 className="font-bold text-lg flex items-center mb-2">
        <span className="mr-2">🏆</span>Achievements
      </h3>
      <ul>
        {expert.achievements.map((ach, i) => (
          <li key={i} className="bg-yellow-100 rounded p-2 my-1">{ach}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
