import React from 'react';

const UserThumbnail = () => {
  const imageIcon = [
    {
      src: 'https://pbs.twimg.com/profile_images/1470935411853647873/LA783532_normal.png',
      alt: 'imon ovbude',
    },
  ];

  return (
    <>
      {imageIcon.map((icon, index) => (
        <img src={icon.src} alt={icon.alt} key={index} />
      ))}
    </>
  );
};

export default UserThumbnail;
