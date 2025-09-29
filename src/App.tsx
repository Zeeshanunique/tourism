import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Culture from './pages/Culture';
import Hospitality from './pages/Hospitality';
import Booking from './pages/Booking';
import Transport from './pages/Transport';
import Weather from './pages/Weather';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/hospitality" element={<Hospitality />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;