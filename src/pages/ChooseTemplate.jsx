import { Link } from "react-router-dom";

export default function ChooseTemplate() {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-5xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Choose Your Resume Template</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((num) => (
            <div key={num} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition cursor-pointer">
              <img src={`https://via.placeholder.com/300x400?text=Template+${num}`} className="w-full" alt={`Template ${num}`} />
              <div className="p-4 text-center">
                <Link to="/resume-preview">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Select</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}