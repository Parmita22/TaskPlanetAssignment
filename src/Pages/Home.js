import React from 'react';
import '../App.css';
import './Home.css';
import Carousel from '../Components/carousel';
import SocialMediaTaskCard from '../Components/SocialMediaTaskCard';
import insta from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import youtube from '../assets/images/youtube.png';
import linkedin from '../assets/images/linkedin.png';
import twitter from '../assets/images/twitter.png';
import telegram from '../assets/images/telegram.png';


const Home = () => {
  return (
    <>
      <Carousel />

      <div className='body'>
        <div className="heading">
          Social Media Task
        </div>
        <hr className="heading-divider" />

        <div className="social-media-container">
          <SocialMediaTaskCard platform="Facebook" icon={facebook} taskCount="5" />
          <SocialMediaTaskCard platform="Instagram" icon={insta} taskCount="3" />
          <SocialMediaTaskCard platform="Youtube" icon={youtube} taskCount="7" />
          <SocialMediaTaskCard platform="LinkedIn" icon={linkedin} taskCount="2" />
          <SocialMediaTaskCard platform="Telegram" icon={telegram} taskCount="4" />
          <SocialMediaTaskCard platform="Twitter" icon={twitter} taskCount="6" />
        </div>
      </div>
      
    </>
  );
};

export default Home;
