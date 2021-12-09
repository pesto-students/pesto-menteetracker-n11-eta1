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

import MentorDashboard from './features/mentor/components/dashboard/Dashboard';
import MentorSession from "./features/mentor/components/session/Session"
import MentorTeam from "./features/mentor/components/team/MentorTeam"
import MentorProfile from "./features/mentor/components/profile/Profile"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin/dashboard" element={<AdmDashboard />} />
      <Route path="/admin/mentee" element={<AdmMentee />} />
      <Route path="/admin/mentor" element={<AdmMentor />} />
      <Route path="/admin/team" element={<AdmTeam />} />
      <Route path="/mentor/dashboard" element={<MentorDashboard />} />
      <Route path="/mentor/session" element={<MentorSession />} />
      <Route path="/mentor/team" element={<MentorTeam />} />
      <Route path="/mentor/profile" element={<MentorProfile />} />
    </Routes>
  );
  
}

export default App;
