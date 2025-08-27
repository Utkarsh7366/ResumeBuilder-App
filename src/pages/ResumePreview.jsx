import React from "react";

const ResumePreview = ({ formData }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">{formData.name || "Your Name"}</h1>
          <p className="text-gray-600">{formData.email || "your@email.com"}</p>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Personal Info */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 border-b pb-2 mb-4">
            Personal Information
          </h2>
          <p><span className="font-bold">Name:</span> {formData.name || "Not Provided"}</p>
          <p><span className="font-bold">Email:</span> {formData.email || "Not Provided"}</p>
          <p><span className="font-bold">Phone:</span> {formData.phone || "Not Provided"}</p>
          <p><span className="font-bold">Address:</span> {formData.address || "Not Provided"}</p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-purple-600 border-b pb-2 mb-4">
            Skills
          </h2>
          {formData.skills && formData.skills.length > 0 ? (
            <ul className="list-disc pl-6 space-y-1">
              {formData.skills.map((skill, index) => (
                <li key={index} className="capitalize">{skill}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No skills added</p>
          )}
        </div>

        {/* Print / Download Button */}
        <div className="text-center">
          <button
            onClick={() => window.print()}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Print / Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;