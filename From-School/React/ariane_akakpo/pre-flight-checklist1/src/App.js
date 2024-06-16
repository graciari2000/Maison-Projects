import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import Dashboard from './components/Dashboard';
import Checklists from './components/Checklists';
import Form from './components/Form';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Define routes */}
        <Routes>
          {/* Route for the login page */}
          <Route path="/login" element={<Login />} />

          {/* Route for the sign-up page */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checklist/:id" element={<Checklists />} />
          <Route path="/form" element={<Form />} />



          {/* Default route, e.g., for the home page */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

