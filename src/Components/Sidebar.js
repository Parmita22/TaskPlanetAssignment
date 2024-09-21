import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaPlusSquare, FaClipboardList, FaTrophy, FaSignOutAlt, FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
     
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        {/* Company name at the top */}
        <div className="company-name">
          <h2>TaskPlanet</h2>
        </div>

        {/* Navigation links centered vertically */}
        <nav className="nav-links">
          <Link to="/" className="nav-item">
            <FaHome className="icon" /> <span>Home</span>
          </Link>
          <Link to="/task" className="nav-item">
            <FaTasks className="icon" /> <span>Task</span>
          </Link>
          <Link to="/create-task" className="nav-item">
            <FaPlusSquare className="icon" /> <span>Create Task</span>
          </Link>
          <Link to="/manage-task" className="nav-item">
            <FaClipboardList className="icon" /> <span>Manage Task</span>
          </Link>
          <Link to="/leaderboard" className="nav-item">
            <FaTrophy className="icon" /> <span>Leaderboard</span>
          </Link>
        </nav>

  
        <div className="logout-section">
          <Link to="/logout" className="nav-item logout">
            <FaSignOutAlt className="icon" /> <span>Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
