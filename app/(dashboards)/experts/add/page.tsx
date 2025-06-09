import SurveyForm from './components/SurveyForm';

export default function SurveyPage() {

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-3xl border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Expert Information Survey</h1>
        <p className="text-gray-700 mb-10 text-center text-lg">Please fill out the following information to help us better understand your expertise and highlight your unique profile.</p>

        <SurveyForm/>
      </div>
    </div>
  );
}
