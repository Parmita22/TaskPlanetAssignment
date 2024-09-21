import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Task from './Pages/Tasks';
import CreateTask from './Pages/CreateTask';
import ManageTask from './Pages/ManageTask';
import Leaderboard from './Pages/Leaderboard';
import EarningsPage from './Pages/EarningsPage'
import './App.css';
import ProfileSidebar from './Components/ProfileSidebar';

function App() {
  return (
    <Router>
      
      <div className="app-container">
        
        <Sidebar />
        <ProfileSidebar/>
        
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task" element={<Task />} />
            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/manage-task" element={<ManageTask />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/earnings" element={<EarningsPage />} />
          </Routes>
      
      </div>
    </Router>
  );
}

export default App;
