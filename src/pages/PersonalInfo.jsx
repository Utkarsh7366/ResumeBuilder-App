import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ResumeContext } from "../context/ResumeContext";

export default function PersonalInfo() {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [form, setForm] = useState(resumeData.personal);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const saveData = () => setResumeData({ ...resumeData, personal: form });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Personal Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" className="px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"/>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"/>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"/>
          <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"/>
          <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn Profile" className="px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none md:col-span-2"/>
          <Link to="/work-experience" className="md:col-span-2">
            <button type="button" onClick={saveData} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition transform">
              Save & Continue
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}