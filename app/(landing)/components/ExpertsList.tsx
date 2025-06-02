'use client'
import React, { useState } from "react";
import { experts } from "../../data/mockdata";

const ExpertsList = () => {
  const [form, setForm] = useState({
    domain: "",
    phone: "",
    location: "",
    social: "",
  });

  return (
    <div className="max-w-4xl mx-auto">
      {experts.map((expert) => (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10" key={expert.id}>
          <div className="flex flex-col items-center">
            <img src={expert.photo} className="w-28 h-28 rounded-full shadow-md -mt-16 border-4 border-white" />
            <h2 className="mt-4 text-2xl font-bold text-center">{expert.name}</h2>
            <p className="text-blue-700 font-medium text-center">{expert.title}</p>
            <p className="mt-4 text-gray-600 text-center">{expert.about}</p>
            <div className="flex flex-col items-center gap-2 mt-6">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>
                  <span className="font-bold text-gray-800">{expert.phone}</span>
                  <span className="text-gray-400 ml-2">({expert.localPhone})</span>
                </span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium text-gray-800">{expert.email}</span>
              </div>
            </div>
          </div>
          {/* Studies and Certificates */}
          <div className="mt-8 bg-blue-50 rounded-xl p-4">
            <h3 className="font-bold text-lg flex items-center mb-2">
              <span className="mr-2">🎓</span>Studies and Certificates
            </h3>
            <ul>
              {expert.studies.map((study, i) => (
                <li key={i} className="bg-blue-100 rounded p-2 my-1">{study}</li>
              ))}
            </ul>
          </div>
          {/* Achievements */}
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
        </div>
      ))}
    </div>
  );
};

export default ExpertsList;