import React from 'react';

export const ProfileLink = ({url, text, isProfileExpanded}) => (
  <a
    href={url}
    class={'profile-link'.concat(isProfileExpanded ? '' : ' inline')}
    rel="noopener noreferrer"
    target="_blank"
  >
    {text}
  </a>
);
