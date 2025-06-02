import React from 'react';

interface ExpertCardProps {
  expert: {
    id: string;
    photo: string;
    name: string;
    title: string;
    about: string;
  };
}

const ExpertCard: React.FC<ExpertCardProps> = ({ expert }) => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10" key={expert.id}>
      <div className="flex flex-col items-center">
        <img src={expert.photo} className="w-28 h-28 rounded-full shadow-md -mt-16 border-4 border-white" />
        <h2 className="mt-4 text-2xl font-bold text-center">{expert.name}</h2>
        <p className="text-blue-700 font-medium text-center">{expert.title}</p>
        <p className="mt-4 text-gray-600 text-center">{expert.about}</p>
      </div>
    </div>
  );
};

export default ExpertCard; 