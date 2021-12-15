import React from 'react';
import { NavLink } from 'react-router-dom';

import './LeftPane.scss';

const LeftPane = () => {
  return (
    <div className='left-pane'>
      <div className='container'>
        <header>Twitter Icon</header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/explore'>Explore</NavLink>
          <NavLink to='/notifications'>Notifications</NavLink>
          <NavLink to='/messages'>Messages</NavLink>
          <NavLink to='/bookmarks'>Bookmarks</NavLink>
          <NavLink to='/lists'>Lists</NavLink>
          <NavLink to='/profile'>Profile</NavLink>
        </nav>
        <button className='tweet'>Tweet</button>
        <footer>
          <button className='account'>
            <div className='photo'>
              <img
                alt='imon ovbude'
                src='https://pbs.twimg.com/profile_images/1470935411853647873/LA783532_normal.png'
              />
            </div>
            <div>
              <div className='name'>Imon Ovbude</div>
              <div className='username'>@ImonOvbude</div>
            </div>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default LeftPane;
