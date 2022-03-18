import React from 'react'
import Mentee from './mentee'
import { Routes, Route } from 'react-router-dom';

import LandingPage from './features/auth/LandingPage';
import SignIn from './features/auth/components/sign-in/SignIn';
import SignUp from './features/auth/components/sign-up/SignUp';
import PrivateRoute from "features/auth/components/PrivateRoute"
import PageNotFound from "features/auth/components/pagenotfound/PageNotFound"

// import "./App.css"
import "./index.css"

//Admin
import AdminDashboard from "./features/admin/components/dashboard/AdminDashboard";
import AdminMentee from "./features/admin/components/mentee/AdminMentee";
import AdminMentor from "./features/admin/components/mentor/AdminMentor";
import AdminTeam from "./features/admin/components/team/AdminTeam";
//Mentor
import MentorDashboard from './features/mentor/components/dashboard/Dashboard';
import MentorSession from "./features/mentor/components/session/Session"
import MentorTeam from "./features/mentor/components/team/MentorTeam"
import MentorProfile from "./features/mentor/components/profile/Profile"
import SingleSessionView from "features/mentor/components/session/SingleSessionView";
// import MenteeDashboard from './mentee/dashboard'
import MenteeTask from './mentee/task'
import MenteeSession from './mentee/session'
import MenteeProfile from './mentee/profile'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path="/admin/dashboard"
        element={<PrivateRoute roles={["admin"]} component={AdminDashboard} />} />
      <Route path="/admin/mentee"
        element={<PrivateRoute roles={["admin"]} component={AdminMentee} />} />
      <Route path="/admin/mentor"
        element={<PrivateRoute roles={["admin"]} component={AdminMentor} />} />
      <Route path="/admin/team" element={<AdminTeam />} />

      <Route path="/mentor/dashboard"
        element={<PrivateRoute roles={["mentor"]} component={MentorDashboard} />} />
      <Route path="/mentor/session"
        element={<PrivateRoute roles={["mentor"]} component={MentorSession} />} />
      <Route path="/mentor/team"
        element={<PrivateRoute roles={["mentor"]} component={MentorTeam} />} />
      <Route path="/mentor/profile"
        element={<PrivateRoute roles={["mentor"]} component={MentorProfile} />} />
      <Route path="/mentor/session/:id"
        element={<PrivateRoute roles={["mentor"]} component={SingleSessionView} />} />

      <Route path="mentee/*" element={<Mentee />} >
        {/* <Route path="dashboard" element={<Hello />} /> */}
        <Route path="task" element={<MenteeTask />} />
        <Route path="session" element={<MenteeSession />} />
        <Route path="profile" element={<MenteeProfile />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
