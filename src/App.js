import React from 'react'
import Mentee from './mentee'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './features/auth/LandingPage';
import SignIn from './features/auth/components/sign-in/SignIn';
import SignUp from './features/auth/components/sign-up/SignUp';
// import MenteeDashboard from './mentee/dashboard'
import MenteeTask from './mentee/task'
import MenteeSession from './mentee/session'
import MenteeProfile from './mentee/profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="mentee/*" element={<Mentee />} >
          <Route path="dashboard" element={<Hello />} />
          <Route path="task" element={<MenteeTask />} />
          <Route path="session" element={<MenteeSession />} />
          <Route path="profile" element={<MenteeProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Hello() {
  return <h1>Hello</h1>
}

export default App
