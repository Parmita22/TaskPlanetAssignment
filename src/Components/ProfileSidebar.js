import React from 'react';
import { Link } from 'react-router-dom';
import { FaWallet, FaTwitter, FaInstagram, FaFacebook, FaWhatsapp, FaTelegram, FaYoutube, FaCopy, FaGem, FaShareAlt, FaDollarSign, FaUser, FaStar, FaMedal } from 'react-icons/fa';
import './ProfileSidebar.css'; 
import profile from '../assets/images/profile-picture.jpg';

const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar">

      <div className="profile-section">
        <img src={profile} alt="Profile" className="profile-image" />
        <h3 className="profile-name">Diyasharma</h3>
        <div className="rank-points">
          <div className="rank"><FaStar className="icon-rank" /> Rank 4</div>
          <div className="points"><FaMedal className="icon-points" /> Points 250</div>
        </div>
        <div className="profile-buttons">
          <Link to="/wallet" className="profile-button"><FaWallet className="icon" /> Wallet</Link>
          <Link to="/referral" className="profile-button"><FaShareAlt className="icon" /> Referral</Link>
          <Link to="/earnings" className="profile-button"><FaDollarSign className="icon" /> Earnings</Link>
          <Link to="/view-profile" className="profile-button"><FaUser className="icon" /> Profile</Link>
        </div>
      </div>

      <div className="refer-link-section">
        <h4>Share Your Refer Link</h4>
        <div className="refer-buttons">
          <a href="#" className="refer-button"><FaCopy className="icon" /> Copy Link</a>
          <a href="#" className="refer-button"><FaWhatsapp className="icon" /> Whatsapp</a>
          <a href="#" className="refer-button"><FaFacebook className="icon" /> Facebook</a>
          <a href="#" className="refer-button"><FaTelegram className="icon" /> Telegram</a>
        </div>
      </div>

      <div className="membership-section">
        <div className="membership-buttons">
          <a href="#" className="membership-button"><FaGem className="icon" /> Premium Membership</a>
          <a href="#" className="membership-button"><FaUser className="icon" /> My Leads</a>
        </div>
      </div>

      <div className="connected-section">
        <h4>Connected With Us</h4>
        <div className="connected-icons">
          <a href="#" className="connected-icon"><FaWhatsapp /></a>
          <a href="#" className="connected-icon"><FaTelegram /></a>
          <a href="#" className="connected-icon"><FaYoutube /></a>
          <a href="#" className="connected-icon"><FaTwitter /></a>
          <a href="#" className="connected-icon"><FaInstagram /></a>
          <a href="#" className="connected-icon"><FaFacebook /></a>
        </div>
      </div>

    </div>
  );
};

export default ProfileSidebar;
