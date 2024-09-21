import React, { useState } from 'react';
import profile from '../assets/images/profile-picture.jpg';

import './EarningsPage.css';
const EarningsPage = () => {
    const [activeTab, setActiveTab] = useState('Referral');
  return (
    <div className="container">
      <h1 className="heading">Earnings Statistics</h1>
      <div className="total-earnings">Total Earnings ₹2875.00</div>

      <div className="earnings-breakdown">
        <div>Self Earnings ₹78.00</div>
        <div>Referral Earnings ₹2876.00</div>
        <div>Reward Earnings ₹0.00</div>
      </div>

      <div className="tabs">
        <button className={`tab ${activeTab === 'Self' ? 'active' : ''}`} onClick={() => setActiveTab('Self')}>Self</button>
        <button className={`tab ${activeTab === 'Referral' ? 'active' : ''}`} onClick={() => setActiveTab('Referral')}>Referral</button>
        <button className={`tab ${activeTab === 'Reward' ? 'active' : ''}`} onClick={() => setActiveTab('Reward')}>Reward</button>
      </div>

      {activeTab === 'Referral' && (
        <div className="referral-details">
          <div className="user-info">
            <img src={profile} alt="profile" className="profile-pic" />
            <div className="user-details">
              <div className="user-name">Diyasharma</div>
              <div className="referral-tag">
                <span>Referral-KYC</span> ₹2.00
              </div>
              <div className="referral-date">Sat, Nov 19 2022</div>
            </div>
          </div>

          <div className="referral-breakdown">
            <div>₹2.00</div>
            <div>Referral-KYC</div>
          </div>

          <div className="referral-table">
            <table>
              <tbody>
                <tr>
                  <td>Sr. No</td>
                  <td>47</td>
                </tr>
                <tr>
                  <td>Full Name</td>
                  <td>Diya Sharma</td>
                </tr>
                <tr>
                  <td>User status</td>
                  <td>Premium</td>
                </tr>
                <tr>
                  <td>Details</td>
                  <td>Referral-KYC</td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td>₹2.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="withdraw-button">Withdraw</button>
        </div>
      )}
    </div>
  );
}

export default EarningsPage;