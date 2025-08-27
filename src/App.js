// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import CreateResume from "./pages/CreateResume";
import PersonalInfo from "./pages/PersonalInfo";
import WorkExperience from "./pages/WorkExperience";
import ChooseTemplate from "./pages/ChooseTemplate";
import ResumePreview from "./pages/ResumePreview";
import Skills from "./pages/Skills";

function App() {
  // ✅ Central state to hold all form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experiences: [],
    skills: [],
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route
          path="/create-resume"
          element={<CreateResume formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/personal-info"
          element={<PersonalInfo formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/work-experience"
          element={<WorkExperience formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/skills"
          element={<Skills formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/choose-template"
          element={<ChooseTemplate formData={formData} />}
        />
        <Route
          path="/resume-preview"
          element={<ResumePreview formData={formData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;