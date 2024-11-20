import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import context and layouts
import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import Monitors from './pages/Monitors';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="monitores">
            <Route index element={<Monitors />} />
            <Route path=":group" element={<Monitors />} />
          </Route>
          <Route path="contacto" index element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
