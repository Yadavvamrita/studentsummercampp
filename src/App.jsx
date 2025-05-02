import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import StudentRegistration from './components/StudentRegistration';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RegistrationSuccess from './components/RegistrationSuccess';
import HostCamp from './components/HostCamp';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/register" element={<StudentRegistration />} />
          <Route path="/host-camp" element={<HostCamp />} />
          <Route path="*" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/registration-success" element={<RegistrationSuccess />} />
                  <Route path="/program-structure" element={<LandingPage />} />
                  <Route path="/camp-fee" element={<LandingPage />} />
                </Routes>
              </main>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;