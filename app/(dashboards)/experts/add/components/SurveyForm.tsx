'use client';

import { useState } from 'react';
import InputField from './InputField';
import FileInputField from './FileInputField';

interface SurveyFormProps {

}

const SurveyForm: React.FC<SurveyFormProps> = ({ }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    domain: '',
    about: '',
    educationCertifications: '',
    keyAchievements: '',
    photo: null as File | null,
    timeline: [] as { year: string; storyTitle: string; descriptionStory: string; nextAdvices: string; learnedLessons: string; }[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: null,
      }));
    }
  };

  const handleTimelineChange = (index: number, field: string, value: string) => {
    setFormData((prevData) => {
      const newTimeline = [...prevData.timeline];
      newTimeline[index] = { ...newTimeline[index], [field]: value };
      return { ...prevData, timeline: newTimeline };
    });
  };

  const addTimelineEntry = () => {
    setFormData((prevData) => ({
      ...prevData,
      timeline: [...prevData.timeline, { year: '', storyTitle: '', descriptionStory: '', nextAdvices: '', learnedLessons: '' }],
    }));
  };

  const removeTimelineEntry = (index: number) => {
    setFormData((prevData) => ({
      ...prevData,
      timeline: prevData.timeline.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Survey data sent:', formData);
    alert('Survey submitted successfully!');
    setFormData({
      fullName: '',
      domain: '',
      about: '',
      educationCertifications: '',
      keyAchievements: '',
      photo: null,
      timeline: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Full Name"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <InputField
        label="Domain"
        id="domain"
        name="domain"
        value={formData.domain}
        onChange={handleChange}
        required
      />

      <InputField
        label="About (brief description)"
        id="about"
        name="about"
        value={formData.about}
        onChange={handleChange}
        rows={4}
        isTextArea
        required
      />

      <InputField
        label="Education & Certifications (comma-separated)"
        id="educationCertifications"
        name="educationCertifications"
        value={formData.educationCertifications}
        onChange={handleChange}
        rows={3}
        isTextArea
      />

      <InputField
        label="Key Achievements (comma-separated)"
        id="keyAchievements"
        name="keyAchievements"
        value={formData.keyAchievements}
        onChange={handleChange}
        rows={3}
        isTextArea
      />

      <FileInputField
        label="Photo"
        id="photo"
        name="photo"
        onChange={handleFileChange}
        accept="image/*"
      />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Timeline</h2>
        {formData.timeline.map((entry, index) => (
          <div key={index} className="border border-gray-200 p-6 rounded-lg shadow-sm bg-gray-50 relative">
            <button
              type="button"
              onClick={() => removeTimelineEntry(index)}
              className="absolute top-3 right-3 bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center text-lg font-semibold hover:bg-red-200 transition duration-300"
            >
              &times;
            </button>
            <InputField
              label="Year"
              id={`timeline-year-${index}`}
              name={`timeline-year-${index}`}
              value={entry.year}
              onChange={(e) => handleTimelineChange(index, 'year', e.target.value)}
              type="number"
            />
            <InputField
              label="Story Title"
              id={`timeline-storyTitle-${index}`}
              name={`timeline-storyTitle-${index}`}
              value={entry.storyTitle}
              onChange={(e) => handleTimelineChange(index, 'storyTitle', e.target.value)}
            />
            <InputField
              label="Story Description"
              id={`timeline-descriptionStory-${index}`}
              name={`timeline-descriptionStory-${index}`}
              value={entry.descriptionStory}
              onChange={(e) => handleTimelineChange(index, 'descriptionStory', e.target.value)}
              isTextArea
              rows={3}
            />
            <InputField
              label="Next Advices"
              id={`timeline-nextAdvices-${index}`}
              name={`timeline-nextAdvices-${index}`}
              value={entry.nextAdvices}
              onChange={(e) => handleTimelineChange(index, 'nextAdvices', e.target.value)}
              isTextArea
              rows={2}
            />
            <InputField
              label="Learned Lessons"
              id={`timeline-learnedLessons-${index}`}
              name={`timeline-learnedLessons-${index}`}
              value={entry.learnedLessons}
              onChange={(e) => handleTimelineChange(index, 'learnedLessons', e.target.value)}
              isTextArea
              rows={2}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addTimelineEntry}
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300 shadow-md"
        >
          Add Timeline Entry
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition duration-300 shadow-lg tracking-wide"
      >
        Submit Survey
      </button>
    </form>
  );
};

export default SurveyForm; 