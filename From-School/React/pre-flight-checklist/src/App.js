import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Checklist from './components/Checklist';
import Form from './components/Form';
import LoginForm from './components/loginForm'; // Import correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} /> {/* Utilisez le composant LoginForm ici */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/checklist/:id" element={<Checklist />} />
        <Route path="/form/:id?" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;



