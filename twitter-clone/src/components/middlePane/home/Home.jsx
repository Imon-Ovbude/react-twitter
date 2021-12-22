import React from 'react';
import TweetBox from './TweetBox';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-feed-container'>
        <div className='home-feed-top-section'>
          <div className='home-title-div'>
            <h2>Home</h2>
          </div>
          <TweetBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
