import React from 'react'
import Mentee from './mentee'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './features/auth/LandingPage';
import SignIn from './features/auth/components/sign-in/SignIn';
import SignUp from './features/auth/components/sign-up/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mentee" element={<Mentee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
