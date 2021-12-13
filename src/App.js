import React from 'react'
import Mentee from './mentee'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './features/auth/LandingPage';
import SignIn from './features/auth/components/sign-in/SignIn';
import SignUp from './features/auth/components/sign-up/SignUp';

// import "./App.css"
import "./index.css"

//Admin
import AdminDashboard from "./features/admin/components/dashboard/AdminDashboard";
import AdminMentee from "./features/admin/components/mentee/AdminMentee";
import AdminMentor from "./features/admin/components/mentor/AdminMentor";
import AdminTeam from "./features/admin/components/team/AdminTeam";

import MentorDashboard from './features/mentor/components/dashboard/Dashboard';
import MentorSession from "./features/mentor/components/session/Session"
import MentorTeam from "./features/mentor/components/team/MentorTeam"
import MentorProfile from "./features/mentor/components/profile/Profile"
// import MenteeDashboard from './mentee/dashboard'
import MenteeTask from './mentee/task'
import MenteeSession from './mentee/session'
import MenteeProfile from './mentee/profile'


const App = () => {
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
      <Route path="mentee/*" element={<Mentee />} >
        <Route path="dashboard" element={<Hello />} />
        <Route path="task" element={<MenteeTask />} />
        <Route path="session" element={<MenteeSession />} />
        <Route path="profile" element={<MenteeProfile />} />
      </Route>
    </Routes>
  );
}

function Hello() {
  return <h1>Hello</h1>
}

export default App;
