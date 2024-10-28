import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import context and layouts
import PageLayout from './layouts/PageLayout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PageLayout />}>
          <Route index element={<h1>Home</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
