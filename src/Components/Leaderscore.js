import React, { useState } from 'react';
import './Leaderscore.css';

const dailyData = {
  toppers: [
    { name: "Brandon Ross",  rank: 1, points: 934, price: 1456, trophies: 3 },
    { name: "Ethan Lynch",  rank: 2, points: 567, price: 756, trophies: 2 },
    { name: "George Douglas",rank: 3, points: 678, price: 1234, trophies: 1 }
  ],
  participants: [
    { name: "Jonathan Jones", rank: 4, points: 245, price: 435 },
    { name: "Andrew Peterson", rank: 5, points: 345, price: 546 }
  ]
};

const weeklyData = {
  toppers: [
    { name: "Nancy Alexander",  rank: 1, points: 1547, price: 2760, trophies: 3 },
    { name: "Emily Holmes",  rank: 2, points: 2403, price: 3320, trophies: 2 },
    { name: "Justin Lee",  rank: 3, points: 1024, price: 2450, trophies: 1 }
  ],
  participants: [
    { name: "Brandon Ross", rank: 4, points: 934, price: 1456 },
    { name: "Ethan Lynch", rank: 5, points: 567, price: 756 }
  ]
};

const monthlyData = {
  toppers: [
    { name: "Jonathan Jones",  rank: 1, points: 245, price: 435, trophies: 3 },
    { name: "Andrew Peterson",rank: 2, points: 345, price: 546, trophies: 2 },
    { name: "George Douglas", rank: 3, points: 678, price: 1234, trophies: 1 }
  ],
  participants: [
    { name: "Brandon Ross", rank: 4, points: 934, price: 1456 },
    { name: "Ethan Lynch", rank: 5, points: 567, price: 756 }
  ]
};

const StudentModal = ({ student, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>×</span>
        <div className="student-details">
          <img
            className="avatar"
            alt={student.name}
            src={`https://ui-avatars.com/api/?name=${student.name}`}
          />
          <h3>{student.name}</h3>
          <p>@{student.username || 'username-placeholder'}</p>
          <div className="gender-location">
            <span className="gender-icon">♂</span> {/* Gender icon placeholder */}
            <span className="location">Odisha, India</span>
          </div>
          <p className="member-since">Member Since: Thu Aug 22 2024</p>
          <div className="points-section">
            <div className="points-category">
              <h4>Daily</h4>
              <p>Points: {student.dailyPoints || 0}</p>
              <p>Stars: ⭐{student.dailyStars || 0}</p>
            </div>
            <div className="points-category">
              <h4>Weekly</h4>
              <p>Points: {student.weeklyPoints || 0}</p>
              <p>Stars: ⭐{student.weeklyStars || 0}</p>
            </div>
            <div className="points-category">
              <h4>Monthly</h4>
              <p>Points: {student.monthlyPoints || 0}</p>
              <p>Stars: ⭐{student.monthlyStars || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const openModal = (student) => {
    setSelectedStudent(student);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedStudent(null);
  };

  let displayedData;
  if (activeTab === "daily") {
    displayedData = dailyData;
  } else if (activeTab === "weekly") {
    displayedData = weeklyData;
  } else {
    displayedData = monthlyData;
  }

  return (
    <div className="leaderboard-container">
      {/* Display Toppers */}
      <div className="top-staff">
        {displayedData.toppers.map((topper, index) => (
          <div key={index} className="cardl" onClick={() => openModal(topper)}>
            <div className="card-header">
              <img
                className="avatarp"
                alt={topper.name}
                 src={`https://ui-avatars.com/api/?name=${topper.name}`}
              />
              <div className="card-details">
                <h3>{topper.name}</h3>
                <p>{topper.title}</p>
              </div>
            </div>
            <div className="card-body">
              <div className="trophies">
                {Array(topper.trophies).fill('🏆').map((trophy, i) => (
                  <span key={i}>{trophy}</span>
                ))}
              </div>
              <div className="stats">
                <div>
                  <h4>{topper.points}</h4>
                  <p>points</p>
                </div>
                <div>
                  <h4>{topper.price}</h4>
                  <p>price</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tab buttons for Daily, Weekly, Monthly */}
      <div className="tab-buttons">
        <button onClick={() => handleTabChange("daily")} className={activeTab === "daily" ? "active-tab" : ""}>Daily</button>
        <button onClick={() => handleTabChange("weekly")} className={activeTab === "weekly" ? "active-tab" : ""}>Weekly</button>
        <button onClick={() => handleTabChange("monthly")} className={activeTab === "monthly" ? "active-tab" : ""}>Monthly</button>
      </div>

      {/* Table displaying the participants */}
      <table className="staff-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>points</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.participants.map((participant, index) => (
            <tr key={index} onClick={() => openModal(participant)}>
              <td className="staff-info">
                <img
                  className="avatar"
                  alt={participant.name}
                  src={`https://ui-avatars.com/api/?name=${participant.name}`}
                />
                {participant.name}
              </td>
              <td>{participant.rank}</td>
              <td>{participant.points}</td>
              <td>{participant.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for student details */}
      <StudentModal student={selectedStudent} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Leaderboard;
