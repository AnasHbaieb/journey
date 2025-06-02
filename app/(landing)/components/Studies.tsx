import React from 'react';

interface ExpertProps {
  expert: {
    studies: string[];
  };
}

const Studies: React.FC<ExpertProps> = ({ expert }) => {
  return (
    <div className="mt-8 bg-blue-50 rounded-xl p-4">
      <h3 className="font-bold text-lg flex items-center mb-2">
        <span className="mr-2">🎓</span>Studies and Certificates
      </h3>
      <ul>
        {expert.studies.map((study: string, i: number) => (
          <li key={i} className="bg-blue-100 rounded p-2 my-1">{study}</li>
        ))}
      </ul>
    </div>
  );
};

export default Studies;
