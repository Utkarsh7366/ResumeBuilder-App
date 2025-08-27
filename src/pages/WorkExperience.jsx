import { useContext, useState } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { Link } from "react-router-dom";

export default function WorkExperience() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [experience, setExperience] = useState(resumeData.experience);

  const addExperience = () => {
    setExperience([...experience, { title: "", company: "", start: "", end: "", desc: "" }]);
  };

  const handleChange = (i, e) => {
    const updated = [...experience];
    updated[i][e.target.name] = e.target.value;
    setExperience(updated);
  };

  const saveData = () => {
    setResumeData({ ...resumeData, experience });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Work Experience</h2>
        {experience.map((exp, i) => (
          <div key={i} className="mb-4 space-y-2">
            <input name="title" placeholder="Job Title" value={exp.title} onChange={(e)=>handleChange(i,e)} className="w-full px-4 py-3 border rounded-xl"/>
            <input name="company" placeholder="Company Name" value={exp.company} onChange={(e)=>handleChange(i,e)} className="w-full px-4 py-3 border rounded-xl"/>
            <div className="grid grid-cols-2 gap-4">
              <input type="date" name="start" value={exp.start} onChange={(e)=>handleChange(i,e)} className="px-4 py-3 border rounded-xl"/>
              <input type="date" name="end" value={exp.end} onChange={(e)=>handleChange(i,e)} className="px-4 py-3 border rounded-xl"/>
            </div>
            <textarea name="desc" placeholder="Job Description" value={exp.desc} onChange={(e)=>handleChange(i,e)} className="w-full px-4 py-3 border rounded-xl"/>
          </div>
        ))}
        <button onClick={addExperience} type="button" className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">+ Add Another Experience</button>
        <Link to="/choose-template">
          <button onClick={saveData} type="button" className="w-full bg-blue-600 mt-4 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Save & Continue</button>
        </Link>
        <Link to="/skills">
  <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">
    Next
  </button>
</Link>
      </div>
    </div>
  );
}