import { Link } from "react-router-dom";

export default function CreateResume() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Build Your Resume</h1>
        <p className="text-gray-600 mb-8">Start creating your professional resume in minutes.</p>
        <Link to="/personal-info">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">Start Now</button>
        </Link>
      </div>
    </div>
  );
}