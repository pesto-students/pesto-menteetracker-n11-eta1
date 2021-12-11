import React from 'react';
import { Routes, Route } from 'react-router-dom';

import "./App.css"

//Admin
import AdminDashboard from "./features/admin/components/dashboard/AdminDashboard";
import AdminMentee from "./features/admin/components/mentee/AdminMentee";
import AdminMentor from "./features/admin/components/mentor/AdminMentor";
import AdminTeam from "./features/admin/components/team/AdminTeam";

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
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/mentee" element={<AdminMentee />} />
      <Route path="/admin/mentor" element={<AdminMentor />} />
      <Route path="/admin/team" element={<AdminTeam />} />
      <Route path="/mentor/dashboard" element={<MentorDashboard />} />
      <Route path="/mentor/session" element={<MentorSession />} />
      <Route path="/mentor/team" element={<MentorTeam />} />
      <Route path="/mentor/profile" element={<MentorProfile />} />
    </Routes>
  );
  
}

export default App;
