import React from 'react';

export const ProfileLink = ({url, text, className}) => (
  <a
    href={url}
    class="profile-link"
    rel="noopener noreferrer"
    target="_blank"
  >
    {text}
  </a>
);
