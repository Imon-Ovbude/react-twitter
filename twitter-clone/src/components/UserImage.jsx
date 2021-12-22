import React from 'react';

const UserImage = () => {
  const imageIcon = [
    {
      src: 'https://pbs.twimg.com/profile_images/1470935411853647873/LA783532_normal.png',
      alt: 'imon ovbude',
    },
  ];

  return (
    <>
      {imageIcon.map(icon => (
        <img src={icon.src} alt={icon.alt} />
      ))}
    </>
  );
};

export default UserImage;
