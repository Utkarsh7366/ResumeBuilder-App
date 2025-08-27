import React, { useState } from "react";

function Skills({ formData, setFormData }) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (skill.trim() !== "") {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill], // ✅ add new skill
      });
      setSkill(""); // clear input
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Your Skills
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addSkill}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        {/* List of added skills */}
        <ul className="space-y-2">
          {formData.skills.map((s, index) => (
            <li
              key={index}
              className="px-3 py-2 bg-gray-200 rounded-md text-gray-700"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;