import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import Checklists from './components/Checklists';
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/checklist/:id" element={<Checklists />} />
        <Route path="/form" element={<Form />} />
        <Route path="/checklist/update/:id" element={<UpdateForm />} />
      </Routes>
    </Router>
  );
};

export default App;

