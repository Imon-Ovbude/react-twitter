import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsTwitter, BsBookmarks } from 'react-icons/bs';
import { RiHome7Line, RiFileList3Line } from 'react-icons/ri';
import { FiSearch, FiMail } from 'react-icons/fi';
import { GrNotification } from 'react-icons/gr';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { CgMoreO } from 'react-icons/cg';

import './LeftPane.scss';
import UserImage from '../userThumbnail/UserThumbnail';

const LeftPane = () => {
  return (
    <div className='left-pane'>
      <div className='container'>
        <IconContext.Provider value={{ size: '2em' }}>
          <header>
            <NavLink to='/'>
              <BsTwitter />
            </NavLink>
          </header>
          <nav>
            <NavLink to='/' exact activeClassName='selected'>
              <span>
                <RiHome7Line /> Home
              </span>
            </NavLink>
            <NavLink to='/explore' activeClassName='selected'>
              <span>
                <FiSearch /> Explore
              </span>
            </NavLink>
            <NavLink to='/notifications' activeClassName='selected'>
              <span>
                <GrNotification className='react-icon' /> Notifications
              </span>
            </NavLink>
            <NavLink to='/messages' activeClassName='selected'>
              <span>
                <FiMail /> Messages
              </span>
            </NavLink>
            <NavLink to='/bookmarks' activeClassName='selected'>
              <span>
                <BsBookmarks /> Bookmarks
              </span>
            </NavLink>
            <NavLink to='/lists' activeClassName='selected'>
              <span>
                <RiFileList3Line /> Lists
              </span>
            </NavLink>
            <NavLink to='/profile' activeClassName='selected'>
              <span>
                <MdOutlinePersonOutline /> Profile
              </span>
            </NavLink>
            <button className='more'>
              <span>
                <CgMoreO /> More
              </span>
            </button>
          </nav>
        </IconContext.Provider>

        <button className='tweet'>Tweet</button>
        <footer>
          <button className='account'>
            <div className='photo'>
              <UserImage />
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
