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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Here you can add your form submission logic
  };

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
              {/* Social Media */}
              <div className="flex gap-4 mt-3">
                {expert.socialMedia.linkedin && (
                  <a href={expert.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"
                     className="bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
                {expert.socialMedia.twitter && (
                  <a href={expert.socialMedia.twitter} target="_blank" rel="noopener noreferrer"
                     className="bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.007-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
                    </svg>
                  </a>
                )}
                {expert.socialMedia.github && (
                  <a href={expert.socialMedia.github} target="_blank" rel="noopener noreferrer"
                     className="bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {expert.socialMedia.instagram && (
                  <a href={expert.socialMedia.instagram} target="_blank" rel="noopener noreferrer"
                     className="bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition">
                    <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.388 3.678 1.369c-.98.98-1.24 2.092-1.298 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.058 1.281.318 2.393 1.298 3.373.981.981 2.093 1.241 3.374 1.299C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.318 3.374-1.299.98-.98 1.24-2.241 1.298-3.373.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.058-1.281-.318-2.393-1.298-3.373-.981-.981-2.093-1.241-3.374-1.299C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                    </svg>
                  </a>
                )}
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