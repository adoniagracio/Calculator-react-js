import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './page/calculator'; 
import Support  from './page/supportpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;