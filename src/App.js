import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import SignUp from './components/SignUp';
import StudentRegistrationForm from './components/StudentRegistrationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/student-registration" element={<StudentRegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
