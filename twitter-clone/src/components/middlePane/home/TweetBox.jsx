import React from 'react';
import UserThumbnail from '../../userThumbnail/UserThumbnail';
import { AiOutlinePicture, AiOutlineSchedule } from 'react-icons/ai';
import { RiFileGifLine } from 'react-icons/ri';
import { BiPoll } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';

import './TweetBox.scss';

const TweetBox = () => {
  return (
    <div className='tweet-box-container'>
      <div className='tweet-box-input'>
        <UserThumbnail />
        <input type='text' placeholder="What's Happening" />
      </div>
      <div className='icon-tweet-div'>
        <ul>
          <li>
            <button>
              <AiOutlinePicture />
            </button>
          </li>
          <li>
            <button>
              <RiFileGifLine />
            </button>
          </li>
          <li>
            <button>
              <BiPoll />
            </button>
          </li>
          <li>
            <button>
              <GrEmoji />
            </button>
          </li>
          <li>
            <button>
              <AiOutlineSchedule />
            </button>
          </li>
        </ul>
        <button className='tweet-button'>Tweet</button>
      </div>
    </div>
  );
};

export default TweetBox;
