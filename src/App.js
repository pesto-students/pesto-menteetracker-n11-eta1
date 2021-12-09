import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Admin
import AdmDashboard from "./features/admin/components/dashboard/AdmDashboard";
import AdmMentee from "./features/admin/components/mentee/AdmMentee";
import AdmMentor from "./features/admin/components/mentor/AdmMentor";
import AdmTeam from "./features/admin/components/team/AdmTeam";

//Auth & Home
import LandingPage from './features/auth/LandingPage';
import SignIn from './features/auth/components/sign-in/SignIn';
import SignUp from './features/auth/components/sign-up/SignUp';

import MentorPage from './features/mentor/MentorPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mentor" element={<MentorPage />} />
      <Route path="/admin/dashboard" element={<AdmDashboard />} />
      <Route path="/admin/mentee" element={<AdmMentee />} />
      <Route path="/admin/mentor" element={<AdmMentor />} />
      <Route path="/admin/team" element={<AdmTeam />} />
    </Routes>
  );
  
}

export default App;
