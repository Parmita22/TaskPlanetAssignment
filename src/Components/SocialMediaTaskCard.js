import React from 'react';
import './SocialMediaTaskCard.css';

const SocialMediaTaskCard = ({ platform, icon, taskCount }) => {
  return (
    <div className="social-media-card">
      <img src={icon} alt={`${platform} icon`} className="social-media-icon" />
      <h2>{platform}</h2>
      <div className="tasks">
        <span className="task-count">{taskCount}</span> Tasks
      </div>
      <a href="#" className="btn">View Tasks</a>
    </div>
  );
};

export default SocialMediaTaskCard;
